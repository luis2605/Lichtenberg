import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { IntroCarrousel } from "./components/carrousel/IntroCarrousel";

function App() {
  return (
    <>
      <Header></Header>
      <IntroCarrousel />

      <Routes></Routes>
    </>
  );
}

export default App;
