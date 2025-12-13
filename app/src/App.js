import { useState } from "react";
import "./src/App.css";
import questions from "./src/data.jsx";
import { ArrowRight } from "react-feather";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const startIndex = 0;
  const endIndex = questions.length - 1;
  const randomIndex =
    Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;

  const [quationindex, setQuationindex] = useState(0);

  const [optionstyle, setOptionstyle] = useState({
    0: {},
    1: {},
    2: {},
    3: {},
  });

  const currentQuation = questions[quationindex];

  const checkAnswer = (selectedOption, idx) => {
    if (currentQuation.answer === selectedOption) {
      toast.success("Correct Answer");
      setOptionstyle({
        ...optionstyle,
        [idx]: { backgroundColor: "lightgreen" },
      });
    } else {
      toast.error(
        "Wrong Answer! The correct answer is: " + currentQuation.answer
      );
      setOptionstyle({
        ...optionstyle,
        [idx]: { backgroundColor: "red" },
      });
    }
  };

  return (
    <div>
      <h1 className="heading">Quize App</h1>

      <p className="text-question">Questions: {quationindex + 1}</p>

      <p className="text-question">{currentQuation.question}</p>

      {currentQuation.options.map((option, idx) => {
        return (
          <div
            key={idx}
            className="option-cart"
            style={optionstyle[idx]}
            onClick={() => checkAnswer(option, idx)}
          >
            {option}
          </div>
        );
      })}

      <ArrowRight
        className="img-next-quation"
        onClick={() => {
          if (quationindex < questions.length - 1) {
            setQuationindex(quationindex + 1);
            setOptionstyle({
              0: {},
              1: {},
              2: {},
              3: {},
            });
          }
        }}
        style={{ cursor: "pointer", color: "blue" }}
      />

      <Toaster />
    </div>
  );
}

export default App;
