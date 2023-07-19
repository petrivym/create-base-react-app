import { Alert, AlertTitle } from "@mui/material";
import { isAxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error = useRouteError();

  return (
    <>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {isAxiosError<{ message: string }>(error) ? error.message : "unknown error"}
      </Alert>
    </>
  );
};

export default ErrorHandler;
