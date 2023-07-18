import "./global.css";

const word = "text";
type HangmanWordProps = {
  guessedLetters: string;
  wordToGuess: string;
};
const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  
  return (
    <div className="hangWord_wrapper">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
