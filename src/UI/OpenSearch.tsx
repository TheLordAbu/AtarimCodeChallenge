import Modal from "../context/ModalContext";
import SearchForm from "./SearchForm";

function OpenSearch() {
  return (
    <Modal.Window name="search">
      <SearchForm />
    </Modal.Window>
  );
}

export default OpenSearch;
