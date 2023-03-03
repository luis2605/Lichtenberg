import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="mega-container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );

  /* testing  */
}

export default App;
