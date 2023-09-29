type SiteData = {
  site_name: string;
};

type RocketData = {
  rocket_name: string;
  rocket_type: string;
};

export type LaunchData = {
  flight_number: number;
  launch_date_utc: string;
  launch_success: boolean;
  launch_year: number;
  mission_name: string;
  launch_site: SiteData;
  rocket: RocketData;
};