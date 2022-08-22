import React, { useState, useEffect } from "react";

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

const FlashCard = ({ num1, num2, ans, arithmeticType, nextProblem }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (isCorrect) {
      // Is correct.
      nextProblem();
      setIsCorrect(false);
    } else {
      // Is incorrect.
    }
  };
  const onChange = (e) => {
    // console.log("On Change Running.");
    // console.log(e.target.value, typeof e.target.value);
    // console.log(e.target.value == ans);
    setIsCorrect(e.target.value == ans);
  };

  return (
    <div
      className={`flash-card ${
        isCorrect ? "flash-card-correct" : "flash-card-incorrect"
      }`}>
      {arithmeticType === "multiplication" ? (
        <h1>
          {num1} x {num2} =
        </h1>
      ) : (
        <h1>
          {num1} / {num2} =
        </h1>
      )}
      <h2 style={isCorrect ? { display: "block" } : { display: "none" }}>
        {ans}
      </h2>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange} />
        <input type="submit" value="Submit" style={{ display: "none" }} />
      </form>
    </div>
  );
};

const FlashCards = ({ options }) => {
  const [problems, setProblems] = useState([]);
  const [problemIdx, setProblemIdx] = useState(0);
  const [testTimer, setTestTimer] = useState(0);

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

  const nextProblem = () => {
    setProblemIdx(problemIdx + 1);
    console.log("Current Problem Index: ", problemIdx);
  };

  return (
    <div>
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
        {testTimer}
      </h2>
    </div>
  );
};

export default FlashCards;
