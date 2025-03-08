import { useSelector } from "react-redux";
import { AppState } from "../user/store";
import OpenSearch from "../UI/OpenSearch";
import WeatherCard from "../UI/WeatherCard";
import { useAddCities } from "../hooks/useAddCities";
import { format, getTime } from "date-fns";

const WeatherDashboard = () => {
  const username = useSelector((state: AppState) => state.user.username);
  const { cities } = useAddCities();
  const curDate = new Date();
  // const curDay = curDate.getDay();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 w-8/12 dark:text-gray-200">
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
      <OpenSearch />

      <div className="rounded shadow p-6 bg-gray-100 dark:shadow-indigo-700/50 dark:bg-zinc-900">
        {cities.length === 0 ? (
          <>
            <p className="text-xl text-gray-400 font-semibold mb-2">
              No cities have been added yet! To see the power of the app, please
              search for a city and add it to your dashboard.
            </p>
          </>
        ) : (
          cities.map((city) => <WeatherCard key={city} city={city} />)
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
