import React from "react";
import Header from "./features/header/Header";
import Slider from "./features/slider/Slider";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="App w-full relative">
      <Header className=""></Header>
      <Slider></Slider>
      <Posts></Posts>
    </div>
  );
}

export default App;
