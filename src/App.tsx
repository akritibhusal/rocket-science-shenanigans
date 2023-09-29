import { useEffect, useState } from "react";
import { LaunchData } from "./types";
import "./App.css";
import Launch from "./components/Launch";
import Pagination from "./components/Pagination";

const API_URL = "https://api.spacexdata.com/v3/launches";
const PER_PAGE = 10;

function App() {
  const [launches, setLaunches] = useState<LaunchData[]>([]);
  const [pageOffset, setPageOffset] = useState(0);

  const updatePage = (newPageValue: number) => {
    newPageValue > 0 && setPageOffset(newPageValue);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getLaunches = async () => {
      const params = `?limit=${PER_PAGE}&offset=${pageOffset * PER_PAGE}`;
      try {
        const response = await fetch(API_URL + params);
        const data = await response.json();

        data.length > 0 ? setLaunches(data) : updatePage(pageOffset - 1);
      } catch (error) {
        console.error(error);
      }
    };

    getLaunches();
  }, [pageOffset]);

  const removeLaunchItem = (index: number) => {
    const newLaunches = structuredClone(launches);
    newLaunches.splice(index, 1);

    setLaunches(newLaunches);
  };

  return (
    <section className="app">
      <h1 className="title">SpaceX Launches</h1>
      <div className="launches">
        {launches.map((launch, index) => (
          <Launch
            launch={launch}
            key={index}
            index={index}
            removeLaunchItem={removeLaunchItem}
          />
        ))}
      </div>
      <Pagination pageOffset={pageOffset} updatePage={updatePage} />
    </section>
  );
}

export default App;
