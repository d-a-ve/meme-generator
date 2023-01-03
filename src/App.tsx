import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";
import { Jokes, JokesType } from "./components/Jokes";
import jokesData from "./jokesData";
import Form from "./components/Form";
import Api from "./components/Api";
import WindowTracker from "./components/WindowTracker";

export default function App() {
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div>
      <Header />
      {/* <Meme /> */}
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
