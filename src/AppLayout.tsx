// import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import Header from "./UI/Header";
import Modal from "./context/ModalContext";
const AppLayout = () => {
  return (
    <div className="bg-gradient-to-r from-background to-muted bg-gray-300 dark:bg-zinc-800">
      <Modal>
        <Header />
        <main className="min-h-screen container mx-auto px-4 py-8 mt-8">
          <Outlet />
        </main>
        <footer className="backdrop-blur py-4 supports-[backdrop-filter]::bg-background/60 shadow shadow-indigo-900/50">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-200 py-4">
            <p className="font-semibold text-gray-600/50 dark:text-gray-100/50">
              Made by Abdul Abu for Atarim
            </p>
          </div>
        </footer>
      </Modal>
    </div>
  );
};

export default AppLayout;
