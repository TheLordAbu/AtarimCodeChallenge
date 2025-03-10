import Modal from "../context/ModalContext";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";

function SearchButton() {
  return (
    <>
      <Modal.Open opens="search">
        <Button className="relative gap-2 md:gap-4 w-full justify-start font-semibold rounded shadow dark:shadow-transparent px-2 sm:pr-12 lg:w-64 hover:bg-gray-200 dark:bg-zinc-700/50 transition-all py-1 dark:hover:bg-zinc-800/50 dark:text-gray-400">
          <IoSearch />
          <span className="whitespace-nowrap">Search Cities</span>
        </Button>
      </Modal.Open>
    </>
  );
}

export default SearchButton;
