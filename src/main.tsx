import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./user/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";
import ErrorFallback from "./UI/ErrorFallback.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
