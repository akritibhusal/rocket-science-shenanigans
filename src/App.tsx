import { useEffect, useState } from "react";
import { LaunchData } from "./types";
import "./App.css";
import Launch from "./components/Launch";

const API_URL = "https://api.spacexdata.com/v3/launches";

function App() {
  const [launches, setLaunches] = useState<LaunchData[]>([]);

  useEffect(() => {
    const getLaunches = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      setLaunches(data);
    };

    getLaunches();
  }, []);

  return (
    <section className="app">
      <h1 className="title">SpaceX Launches</h1>
      <div className="launches">
        {launches.map((launch, index) => (
          <Launch launch={launch} key={index} />
        ))}
      </div>
    </section>
  );
}

export default App;
