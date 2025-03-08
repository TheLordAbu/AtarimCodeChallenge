import { useCurrentWeather, useWeatherForecast } from "../hooks/useGetWeather";
import { IoArrowUpSharp } from "react-icons/io5";

const WeatherCard = ({ city }: { city: string }) => {
  // prettier-ignore
  const { data: currentWeather, isLoading: currentWeatherLoading, error: currentWeatherError } = useCurrentWeather(city);
  // prettier-ignore
  const { data: forecastData, isLoading: forecastLoading, error: forecastError } = useWeatherForecast(city);

  if (currentWeatherLoading || forecastLoading) return <p>Loading...</p>;
  if (currentWeatherError || forecastError)
    return <p>Error fetching weather data for {city}</p>;

  return (
    <div className="border p-6 rounded-md shadow-md mb-4">
      <div className="space-y-4">
        <div className="flex item-end gap-1">
          <h2 className="text-4xl font-bold">{city}</h2>
        </div>
      </div>
      <p>Temperature: {currentWeather.current.temp_c}°C</p>
      <p>Humidity: {currentWeather.current.humidity}%</p>
      <p>Wind Speed: {currentWeather.current.wind_kph} kph</p>
    </div>
  );
};

export default WeatherCard;
