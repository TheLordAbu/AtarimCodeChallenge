import { formatTemp } from "../hooks/useFormatTemp";
import { useCurrentWeather } from "../hooks/useGetWeather";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import Box from "./Box";
import Spinner from "./Spinner";
import BoxRow from "./BoxRow";
import Button from "./Button";
import { useAddCities } from "../hooks/useAddCities";
import { Link, useNavigate } from "react-router";

const WeatherCard = ({ city }: { city: string }) => {
  const { removeCity } = useAddCities();
  const navigate = useNavigate();
  function handleRemoveCity(city: string) {
    removeCity(city);
    navigate("/dashboard");
  }
  // prettier-ignore
  const { data: currentWeather, isLoading: currentWeatherLoading, error: currentWeatherError } = useCurrentWeather(city);
  if (currentWeatherLoading) return <Spinner />;
  if (currentWeatherError)
    return (
      <p className="rounded p-4 shadow dark:shadow-indigo-700/50">
        Error fetching weather data for {city}
      </p>
    );

  return (
    <Box className="p-6 dar relative">
      <Link to={`/city/${city}`}>
        <div className="flex lg:flex-row flex-col lg:items-end gap-2 mb-6">
          <h2 className="text-4xl font-bold">{city},</h2>
          <span>{currentWeather.location.country}</span>
        </div>
        <p className="mb-2">{currentWeather.location.localtime}</p>
        <BoxRow>
          <IoPartlySunnyOutline className="h-11 w-11" />
          <p className="text-xl md:text-4xl font-bold">
            {formatTemp(Math.round(currentWeather.current.temp_c))}
            <sup>c</sup>
          </p>
          <div className="ml-4">
            <p className="text-lg sm:text-m sm:leading-none opacity-50">
              {currentWeather.current.condition.text}
            </p>
            <p className="text-m opacity-50">
              Feels like{" "}
              {formatTemp(Math.round(currentWeather.current.feelslike_c))}
            </p>
          </div>
          <p className=" ml-4 flex items-center gap-2">
            <FiWind className="h-6 w-6" />
            <span>{currentWeather.current.wind_kph} kph</span>
          </p>
        </BoxRow>
      </Link>
      <Button
        onClick={() => handleRemoveCity(city)}
        className="absolute top-0 right-4"
      >
        <TiDeleteOutline className="h-6 w-6" />
      </Button>
    </Box>
  );
};

export default WeatherCard;
