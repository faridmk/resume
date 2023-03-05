import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/NavBar/Navbar";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <Header />
      <Navbar />
      <Footer />
    </Container>
  );
}

export default App;
