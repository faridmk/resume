import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <Item>React Native</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>React</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>JavaScript</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>TypeScript</Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Item>Redux Toolkit</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>HTML/CSS</Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>Material UI</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>React Icons</Item>
        </Grid>
        <Grid item xs={6} md={2}>
          <Item>Axios</Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Item>Styled Components</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>Tailwind Css</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>React Spinners</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>Ajax</Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Item>Formik</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>Yup</Item>
        </Grid>
        <Grid item xs={6} md={5}>
          <Item>SmartID</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>Nanoid</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>Rest API</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
