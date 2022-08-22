import React, { useState } from "react";
import Options from "./components/Options";
import FlashCards from "./components/FlashCards";
import "./App.css";

function App() {
  const [options, setOptions] = useState({
    name: "",
    arithmeticType: "",
    flashCardType: "",
  });
  const [startFlashCard, setStartFlashCard] = useState(false);

  return (
    <div className="App">
      <h1>Flashcard Generator</h1>
      {startFlashCard ? (
        <FlashCards options={options} />
      ) : (
        <Options
          options={options}
          setOptions={setOptions}
          setStartFlashCard={setStartFlashCard}
        />
      )}
    </div>
  );
}

export default App;
