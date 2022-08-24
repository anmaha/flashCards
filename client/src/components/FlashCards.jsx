import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";

import "../styles/FlashCards.css";

const GenerateProblem = (arithmeticType) => {
  const num1 = Math.floor(Math.random() * 13 + 1);
  const num2 = Math.floor(Math.random() * 13 + 1);
  const ans = arithmeticType === "multiplication" ? num1 * num2 : num1 / num2;
  return [num1, num2, ans, arithmeticType];
};

const GenerateProblems = (arithmeticType, numOfProblems) => {
  const problems = [];
  // console.log("Generating Problems...");
  for (let i = 0; i < numOfProblems; i++) {
    const problem = GenerateProblem(arithmeticType);
    // console.log("Problem Generated: ", problem);
    problems.push(GenerateProblem(arithmeticType));
  }
  return problems;
};

const FlashCards = ({ options }) => {
  const [problems, setProblems] = useState([]);
  const [problemIdx, setProblemIdx] = useState(0);
  const [testTimer, setTestTimer] = useState(0);
  const [isTestComplete, setIsTestComplete] = useState(false);

  useEffect(() => {
    switch (options.flashCardType) {
      case "practice":
        setProblems(GenerateProblems(options.arithmeticType, 25));
        break;
      case "test":
        setProblems(GenerateProblems(options.arithmeticType, 100));
        break;
    }
    console.log(problems);
  }, [options.flashCardType]);
  useEffect(() => {
    if (options.flashCardType === "test") {
      let t = 120;
      const intervalId = setInterval(() => {
        setTestTimer(t);
        t--;
        if (t <= 0) {
          setTestTimer(0);
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, []);
  useEffect(() => {
    setIsTestComplete(testTimer <= 0);
  }, [testTimer]);

  const nextProblem = () => {
    setProblemIdx(problemIdx + 1);
    console.log("Current Problem Index: ", problemIdx);
  };

  return (
    <div className="flash-cards">
      <h2 className="problem-count">
        {problemIdx}/{problems.length}
      </h2>
      {problems[problemIdx] && (
        <FlashCard
          num1={problems[problemIdx][0]}
          num2={problems[problemIdx][1]}
          ans={problems[problemIdx][2]}
          arithmeticType={problems[problemIdx][3]}
          nextProblem={nextProblem}
        />
      )}
      <h2
        style={
          options.flashCardType === "test"
            ? { display: "block" }
            : { display: "none" }
        }>
        <img src="components/images/" alt="" /> {testTimer}
      </h2>
    </div>
  );
};

export default FlashCards;
