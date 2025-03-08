export interface Coordinates {
  lat: number;
  lon: number;
}

export interface City {
  city: string;
  coordinates: Coordinates;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  coord: Coordinates;
  location: Location;
  current: Current;
  weather: WeatherCondition[];
  main: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    pressure_mb: number;
    humidity: number;
  };
  wind: {
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
  };
  name: string;
  dt: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: Coordinates["lat"];
  lon: Coordinates["lon"];
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface ForecastData {
  coord: Coordinates;
  location: Location[];
  current: Current[];
  list: Array<{
    dt: number;
    main: WeatherData["main"];
    weather: WeatherData["weather"];
    wind: WeatherData["wind"];
    dt_txt: string;
  }>;
  city: {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezone: string;
    sunrise: number;
    sunset: number;
  };
}

export interface GeocodeRes {
  id: null | undefined;
  name: string;
  lat?: number;
  lon?: number;
  country: string;
  state: string;
  region?: string;
}
