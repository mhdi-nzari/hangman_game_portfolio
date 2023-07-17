import { useState } from "react";
import words from "./wordlist.json";
import "./global.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="wrapper">
      <div className="wrapper_one">Lose Win</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
    </div>
  );
};

export default App;
