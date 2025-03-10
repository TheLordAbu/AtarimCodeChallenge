import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import Spinner from "./Spinner";
import { useModal } from "../context/ModalContext";
import { useSearch } from "../hooks/useGetWeather";
import { getCode } from "country-list";
import SearchItem from "./Search/SearchItem";
import SearchGroup from "./Search/SearchGroup";
import { useNavigate } from "react-router";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data: cities, isLoading: isSearching } = useSearch(query);
  const { closeModal } = useModal();

  const handleSearch = (city: { name: any }) => {
    closeModal();
    if (query.trim() !== "") {
      navigate(`/city/${city.name}`);
    }
  };

  return (
    <>
      <div className="flex items-center w-[98%] border border-gray-800/50 rounded-lg">
        <input
          placeholder="Please enter a city"
          className=" w-full px-4 py-2 tracking-normal text-lg dark:text-gray-100"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="bg-indigo-700/20 border border-indigo-700/30 px-3">
          <IoSearch size={24} />
        </Button>
      </div>
      <div className="mt-4 transition-all">
        {query.length === 0 && !isSearching && (
          <p className="text-lg font-semibold dark:text-gray-300 tracking-wide">
            Please Start Searching
          </p>
        )}
        <div className="py-4 mt-4">
          {cities && cities.length > 0 && (
            <SearchGroup heading="Search Results">
              {isSearching && <Spinner />}
              {cities.map((city: any) => {
                return (
                  <SearchItem key={city.id} onClick={() => handleSearch(city)}>
                    <p>{city.name},</p>
                    {city.region && (
                      <span className="opacity-55 font-normal ml-1 hidden sm:block">
                        {city.region},
                      </span>
                    )}
                    <span className="opacity-55 font-normal ml-1">
                      {city.country},
                    </span>
                    <span className="opacity-55 font-normal ml-1">
                      {getCode(city?.country)}
                    </span>
                  </SearchItem>
                );
              })}
            </SearchGroup>
          )}
        </div>
      </div>
    </>
  );
}
