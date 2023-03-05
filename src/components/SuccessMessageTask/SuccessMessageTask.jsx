import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function SuccessMessageTask() {
  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>AWESOME</AlertTitle>
        Great — <strong>You are a Developer!</strong>
      </Alert>
    </Stack>
  );
}
