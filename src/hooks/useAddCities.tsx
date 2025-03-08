import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./useLocalStorage";
import toast from "react-hot-toast";

export function useAddCities() {
  const [cities, setCities] = useLocalStorage<string[]>("cities", []);

  const queryClient = useQueryClient();

  const cityQuery = useQuery({
    queryKey: ["cities"],
    queryFn: async () => cities,
    staleTime: Infinity,
  });

  const addCity = useMutation({
    mutationFn: async (city: string) => {
      if (cities.includes(city)) return cities;
      const updatedCities = [...cities, city];
      setCities(updatedCities);
      return updatedCities;
    },
    onSuccess: () => {
      toast.success("City added successfully");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const removeCity = useMutation({
    mutationFn: async (city: string) => {
      if (!cities.includes(city)) return cities;
      const updatedCities = cities.filter((c) => c !== city);
      setCities(updatedCities);
      return updatedCities;
    },
    onSuccess: () => {
      toast.success("City removed successfully");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    citiesData: cityQuery.data,
    addCity: addCity.mutate,
    removeCity: removeCity.mutate,
    cities,
  };
}
