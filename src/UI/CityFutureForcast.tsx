import { format } from "date-fns";
import { formatTemp } from "../hooks/useFormatTemp";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
function CityFutureForcast(day: any) {
  const { astro } = day;
  const curDay = day.day;
  return (
    <li className="p-4 mb-4 bg-gray-100 shadow rounded dark:shadow-indigo-700/40 dark:bg-zinc-800">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-2xl mb-2">
            {format(new Date(day.date), "EEE")}
          </p>
          <p className="dark:text-gray-400 text-md mb-2">
            {format(new Date(day.date), "d MMM")}
          </p>
          <div className="flex gap-6 mb-4">
            <div className="flex items-center gap-2 high">
              <GoArrowUp />
              <p>High: {formatTemp(curDay.maxtemp_c)}</p>
            </div>
            <div className="flex items-center gap-2 low">
              <GoArrowDown />
              <p>Low: {formatTemp(curDay.mintemp_c)}</p>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="flex justify-center items-center gap-2">
              <IoSunnyOutline className="w-8 h-6" />
              <div className="flex flex-col">
                <p className="dark:text-gray-400">Sunrise</p>
                <p className="font-semibold">{astro.sunrise}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <HiOutlineMoon className="w-8 h-6" />
              <div className="flex flex-col">
                <p className="dark:text-gray-400">Sunset</p>
                <p className="font-semibold">{astro.sunset}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-6xl font-extrabold">
            {formatTemp(curDay.avgtemp_c)}
          </h3>
        </div>
      </div>
    </li>
  );
}

export default CityFutureForcast;
