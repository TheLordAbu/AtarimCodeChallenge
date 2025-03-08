import { FallbackProps } from "react-error-boundary";
import Box from "./Box";
import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Box>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </Box>
  );
}

export default ErrorFallback;
