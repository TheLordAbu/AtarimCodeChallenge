// import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import Header from "./UI/Header";
import Modal from "./context/ModalContext";
import OpenSearch from "./UI/OpenSearch";
import Footer from "./UI/Footer";
const AppLayout = () => {
  return (
    <div className="bg-gradient-to-r from-background to-muted bg-gray-300 dark:bg-zinc-800">
      <Modal>
        <Header />
        <main className="min-h-screen lg:container mx-auto px-4 py-8 mt-8">
          <Outlet />
          <OpenSearch />
        </main>
        <Footer />
      </Modal>
    </div>
  );
};

export default AppLayout;
