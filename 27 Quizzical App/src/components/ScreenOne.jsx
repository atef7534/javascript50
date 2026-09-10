import { useState } from "react";

import upperTop from "../assets/bloby.png";
import lowerBottom from "../assets/blobs.png";

import ScreenTwo from "./ScreenTwo";
export default function ScreenOne() {
  const [screenOne, setScreenOne] = useState(true);

  function handleClick() {
    setScreenOne((prevValue) => !prevValue);
  }
  return (
    <main className="quiz bg-light">
      <img
        src={upperTop}
        alt="A portion of a yellow circle"
        className="upper-top"
      />
      <img
        src={lowerBottom}
        alt="A portion of a blue circle"
        className="lower-bottom"
      />
      {screenOne && (
        <div className="container">
          <h1 className="quizzical-title">Quizzical</h1>
          <p className="description">Some description if needed</p>
          <button className="start-quiz-btn" onClick={handleClick}>
            Start quiz
          </button>
        </div>
      )}

      {!screenOne && <ScreenTwo />}
    </main>
  );
}
