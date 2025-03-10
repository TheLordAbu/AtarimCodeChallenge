export const API_CONFIG = {
  BASE_URL: "http://api.weatherapi.com/v1",
  API_KEY: "c348248b643441a2937170052250503",
  GEO: "https://api.api-ninjas.com/v1/reversegeocoding",
  GEO_API_KEY: "l9Z0vQSny3ZhgzdFWqpiiQ==F23fZ9FgAMwH3DRQ",
};

export const fetchCurrentWeather = async (city: string) => {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}/current.json?key=${API_CONFIG.API_KEY}&q=${city}&aqi=no`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch current weather");
  }
  return res.json();
};

export const fetchWeatherForecast = async (city: string) => {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}/forecast.json?key=${API_CONFIG.API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch weather forecast");
  }
  return res.json();
};

export const searchLocals = async (query: string) => {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}/search.json?key=${API_CONFIG.API_KEY}&q=${query}`
  );
  if (!res.ok) {
    throw new Error(`Weather API Error: ${res.statusText}`);
  }
  return res.json();
};

export const searchCityWeather = async (city: string) => {
  return fetchCurrentWeather(city);
};
