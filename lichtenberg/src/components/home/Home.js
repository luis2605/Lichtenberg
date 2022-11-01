import React from "react";
import { IntroCarrousel } from "../carrousel/IntroCarrousel";
import Joke from "../joke/Joke";

export const Home = () => {
  return (
    <div>
      <IntroCarrousel></IntroCarrousel>
      <Joke></Joke>
    </div>
  );
};
