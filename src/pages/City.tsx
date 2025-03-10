import React, { useEffect, useState } from "react";
// Icons
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
// Hooks
import { useCurrentWeather, useWeatherForecast } from "../hooks/useGetWeather";
import { useAddCities } from "../hooks/useAddCities";
import { useNavigate, useParams } from "react-router";
import { formatTemp } from "../hooks/useFormatTemp";
import CityFutureForcast from "../UI/CityFutureForcast";
import Spinner from "../UI/Spinner";

const CityDetail: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();
  const {
    data: currentWeather,
    isLoading: loadingWeather,
    isError: errorWeather,
  } = useCurrentWeather(city || "");
  const {
    data: weatherForecast,
    isLoading: loadingForecast,
    isError: errorForecast,
  } = useWeatherForecast(city || "");
  const { addCity, cities } = useAddCities();
  const [isCityAdded, setIsCityAdded] = useState(false);

  useEffect(() => {
    if (city && cities.includes(city)) {
      setIsCityAdded(true);
    } else {
      setIsCityAdded(false);
    }
  }, [city, cities]);

  function handleAddCity() {
    if (!city) return;
    addCity(city || "");
    navigate("/dashboard");
  }

  if (loadingWeather || loadingForecast) return <Spinner />;
  if (errorWeather || errorForecast)
    return <div>Error fetching data for {city}</div>;

  return (
    <div className="md:p-6">
      <div className="lg:max-w-6xl mx-auto bg-gray-200 dark:bg-zinc-900 py-8 lg:px-12 md:px-8 px-4 rounded-lg shadow dark:shadow-indigo-900/50 dark:text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="lg:text-7xl sm:text-5xl text-xl font-bold mb-4">
              {city}
            </h2>
            <h3 className="text-xl font-semibold">Current Weather:</h3>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-9xl font-black tracking-tight">
                {formatTemp(currentWeather?.current.temp_c)}
              </p>
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  Feels like {formatTemp(currentWeather?.current.feelslike_c)}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <WiHumidity className="text-blue-500 h-12 w-12" />
                <div className="space-y-0 5">
                  <p className="text-sm font-medium">Humidity</p>
                  <p>{currentWeather?.current.humidity}%</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <WiStrongWind className="text-blue-300 h-12 w-12" />
                <div className="space-y-0 5">
                  <p className="text-sm font-medium">Wind Speed:</p>
                  <p>{currentWeather?.current.wind_kph} km/h%</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleAddCity}
              className="mt-6 bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 rounded-md cursor-pointer"
              disabled={isCityAdded}
            >
              <span>
                {isCityAdded
                  ? `${city} is already on the dashboard`
                  : `Add ${city} to Dashboard`}
              </span>
            </button>
          </div>
          <div>
            <h3 className="text-3xl font-semibold my-8">5-Day Forecast</h3>
            <ul>
              {weatherForecast?.forecast.forecastday.map((day: any) => (
                <CityFutureForcast key={day.date} {...day} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
