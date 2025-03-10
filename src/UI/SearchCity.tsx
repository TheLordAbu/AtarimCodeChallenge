import { useState } from "react";
import { useSearchCityWeather } from "../hooks/useGetWeather";
import { useModal } from "../context/ModalContext";

const SearchCity = ({ onCityAdd }: { onCityAdd?: (city: string) => void }) => {
  const { closeModal } = useModal();
  const [city, setCity] = useState("");
  const { data, error, isLoading, refetch } = useSearchCityWeather(city);

  const handleSearch = () => {
    refetch();
    if (data) {
      if (onCityAdd) {
        onCityAdd(city);
      }
      closeModal();
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
    </div>
  );
};

export default SearchCity;
