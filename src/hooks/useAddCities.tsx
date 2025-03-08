import { useState } from "react";

export function useAddCities() {
  const [cities, setCities] = useState<string[]>([]);

  const addCityToDashboard = (city: string) => {
    setCities((prevCities) => [...prevCities, city]);
  };
  return { addCityToDashboard, cities, setCities };
}
