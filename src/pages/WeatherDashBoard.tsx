import { useSelector } from "react-redux";
import { AppState } from "../user/store";
import { useAddCities } from "../hooks/useAddCities";
import { format } from "date-fns";
import WeatherCard from "../UI/WeatherCard";

const WeatherDashboard = () => {
  const username = useSelector((state: AppState) => state.user.username);
  const { citiesData } = useAddCities();
  const curDate = new Date();

  return (
    <div className="md:p-6 p-2">
      <h1 className="text-4xl font-bold mb-4 md:w-8/12 dark:text-gray-200">
        Welcome to your Dashboard, {username}
      </h1>
      <div className="mb-6">
        <p className="text-4xl font-bold dark:text-gray-300 mb-2">
          {format(curDate, "HH : mm a")}
        </p>
        <p className="text-md font-semibold dark:text-gray-400">
          {format(curDate, "EEEE dd MMM yyy")}
        </p>
      </div>

      <div className="rounded shadow p-6 bg-gray-200 dark:shadow-indigo-700/50 dark:bg-zinc-900 grid lg:grid-cols-2 gap-4">
        <>
          {citiesData?.length === 0 && (
            <p className="text-xl text-gray-400 font-semibold mb-2">
              No cities have been added yet! To see the power of the app, please
              search for a city and add it to your dashboard.
            </p>
          )}
        </>
        {citiesData?.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
