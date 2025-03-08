import { useQuery } from "@tanstack/react-query";
import {
  fetchCurrentWeather,
  fetchWeatherForecast,
  searchLocals,
} from "../api/api";

export const useCurrentWeather = (city: string) => {
  return useQuery({
    queryKey: ["currentWeather", city],
    queryFn: () => fetchCurrentWeather(city),
    enabled: !!city,
  });
};

export const useWeatherForecast = (city: string) => {
  return useQuery({
    queryKey: ["weatherForecast", city],
    queryFn: () => fetchWeatherForecast(city),
    enabled: !!city,
  });
};

export const useSearchCityWeather = (city: string) => {
  return useQuery({
    queryKey: ["searchWeather", city],
    queryFn: () => fetchCurrentWeather(city),
    enabled: !!city,
  });
};

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["locationSearch", query],
    queryFn: () => searchLocals(query),
    enabled: query.length >= 3,
  });
}
