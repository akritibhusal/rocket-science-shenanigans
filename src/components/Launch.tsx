import { LaunchData } from "../types";

type LaunchProps = {
  index: number;
  launch: LaunchData;
  removeLaunchItem: (index: number) => void;
};

const getDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const day = date.getDay();
  const month = date.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${day} ${month} ${year} ${time}`;
};

const Launch = ({ index, launch, removeLaunchItem }: LaunchProps) => {
  const handleClick = (index: number) => {
    removeLaunchItem(index);
  };

  return (
    <div className="launch">
      <div className="launch__flight-number">{launch.flight_number}</div>
      <h2 className="launch__mission">{launch.mission_name}</h2>
      <div className="launch__date">{getDate(launch.launch_date_utc)}</div>
      <div className="launch__year">{launch.launch_year}</div>
      <div className="launch__site">{launch.launch_site.site_name}</div>
      <div
        className={`launch__status ${
          !launch.launch_success ? "is-failure" : ""
        }`}
      >
        {launch.launch_success ? "success" : "failure"}
      </div>
      <div className="launch__rocket">
        <div className="launch__rocket-icon">🚀</div>
        <div className="launch__rocket-name">{launch.rocket.rocket_name}</div>
        <div className="launch__rocket-type">{launch.rocket.rocket_type}</div>
      </div>
      <button className="launch__button" onClick={() => handleClick(index)}>
        Hide
      </button>
    </div>
  );
};

export default Launch;
