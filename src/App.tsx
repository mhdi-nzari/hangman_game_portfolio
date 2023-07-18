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
  const inCorrectLetterss = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  return (
    <div className="wrapper">
      <div className="wrapper_one">Lose Win</div>
      <HangmanDrawing numberOfGusses={inCorrectLetterss.length} />
      <HangmanWord  guestLetters={guessedLetters} wordToGuest={wordToGuess}/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
