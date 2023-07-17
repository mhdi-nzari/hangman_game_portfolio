import "./global.css";

const word = "text";
const HangmanWord = () => {
  const guessedLetters = ["t", "e", "g"];
  return (
    <div className="hangWord_wrapper">
      {word.split("").map((letter, index) => (
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
