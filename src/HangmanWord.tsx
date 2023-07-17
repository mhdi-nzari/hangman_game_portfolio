import "./global.css";

const word = "text";
const HangmanWord = () => {
  return (
    <div className="hangWord_wrapper">
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span style={{ visibility: "hidden" }}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
