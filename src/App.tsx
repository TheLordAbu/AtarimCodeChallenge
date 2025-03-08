// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import WeatherDashboard from "./pages/WeatherDashBoard";
import AppLayout from "./AppLayout";
import City from "./pages/City";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <WeatherDashboard /> },
      { path: "/city/:city", element: <City /> },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkModeProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#1f293778",
              color: "#fff",
            },
          }}
        />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
