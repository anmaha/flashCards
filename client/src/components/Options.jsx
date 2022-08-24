import React from "react";

import "../styles/Options.css";

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
      <h1>{options && options.arithmeticType} Flash Cards</h1>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={onChange} />
        </div>
        {/* What would you like to practice? */}
        <div className="input-group">
          <label htmlFor="arithmeticType">Multiplication</label>
          <input
            type="radio"
            name="arithmeticType"
            value="multiplication"
            onChange={onChange}
          />
          <label htmlFor="arithmeticType">Division</label>
          <input
            type="radio"
            name="arithmeticType"
            value="division"
            onChange={onChange}
          />
        </div>
        {/* Take a timed test? */}
        <div className="input-group">
          <label htmlFor="flashCardType">Practice</label>
          <input
            type="radio"
            name="flashCardType"
            value="practice"
            onChange={onChange}
          />
          <label htmlFor="flashCardType">Test</label>
          <input
            type="radio"
            name="flashCardType"
            value="test"
            onChange={onChange}
          />
        </div>
        {/* <label>
          Yes
          <input
            type="radio"
            name="flashCardType"
            value="test"
            onChange={onChange}
          />
        </label> */}
        <input type="submit" value="Start" />
      </form>
    </div>
  );
};

export default Options;
