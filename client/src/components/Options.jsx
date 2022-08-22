import React from "react";

/**
 * Name
 * Multiplication or Division
 * Flash Cards Types:
 *  Practice = 25 Questions
 *  Test = 60 Seconds as many as you can do.
 */

const Options = ({ options, setOptions, setStartFlashCard }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setStartFlashCard(true);
  };

  const onChange = (e) => {
    e.preventDefault();
    options[e.target.name] = e.target.value;
    setOptions(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          Enter your name:
          <input type="text" name="name" onChange={onChange} />
        </label>
        What would you like to practice?
        <label>
          Multiplication
          <input
            type="radio"
            name="arithmeticType"
            value="multiplication"
            onChange={onChange}
          />
        </label>
        <label>
          Division
          <input
            type="radio"
            name="arithmeticType"
            value="division"
            onChange={onChange}
          />
        </label>
        Take a timed test?
        <label>
          No
          <input
            type="radio"
            name="flashCardType"
            value="practice"
            onChange={onChange}
          />
        </label>{" "}
        <label>
          Yes
          <input
            type="radio"
            name="flashCardType"
            value="test"
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Start" />
      </form>
    </div>
  );
};

export default Options;
