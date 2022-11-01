import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { IntroCarrousel } from "./components/carrousel/IntroCarrousel";
import Joke from "./components/joke/Joke";
import { Home } from "./components/home/Home";
function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
