import React from "react";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT,
  Footer,
} from "./containers";

import "./App.css";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
