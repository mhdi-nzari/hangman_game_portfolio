import "./global.css";
const HEAD = <div className="head" />;
const BODY = <div className="body_div" />;

const right_hand = <div className="right_hand" />;
const left_hand = <div className="left_hand" />;

const right_leg = <div className="right_leg" />;

const left_leg = <div className="left_leg" />;



const HangmanDrawing = () => {
  return (
    <div className="hangman-draw">
      {HEAD}
      {BODY}
      {right_hand}
      {left_hand}
      {right_leg}
      {left_leg}
      <div className="hangman-draw_el4" />
      <div className="hangman-draw_el" />
      <div className="hangman-draw_el2" />
      <div className="hangman-draw_el3" />
    </div>
  );
};

export default HangmanDrawing;
