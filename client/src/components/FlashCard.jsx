import React, { useState } from "react";
import "../styles/FlashCard.css";

const FlashCard = ({ num1, num2, ans, arithmeticType, nextProblem }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [answer, setAnswer] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (isCorrect) {
      // Is correct.
      setNumberCorrect(numberCorrect + 1);
      nextProblem();
      setIsCorrect(false);
    } else {
      // Is incorrect.
    }
    setAnswer("");
  };
  const onChange = (e) => {
    setIsCorrect(e.target.value == ans);
    setAnswer(e.target.value);
  };
  return (
    <div
      className={`flash-card ${
        isCorrect ? "flash-card-correct" : "flash-card-incorrect"
      }`}>
      <div className="flash-card-input">
        {arithmeticType === "multiplication" ? (
          <h1>
            {num1} x {num2} ={" "}
          </h1>
        ) : (
          <h1>
            {num1} / {num2} ={" "}
          </h1>
        )}
        <form onSubmit={onSubmit}>
          <input
            style={isCorrect ? { color: "green" } : { color: "black" }}
            type="text"
            value={answer}
            onChange={onChange}
          />
          <input type="submit" value="Submit" style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
};

export default FlashCard;
