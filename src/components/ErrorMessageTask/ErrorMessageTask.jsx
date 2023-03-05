import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ErrorMessageTask() {
  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>TRY AGAIN</AlertTitle>
        Keep attention — <strong>you will succeed!</strong>
      </Alert>
    </Stack>
  );
}
