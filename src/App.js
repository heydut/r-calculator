import "./App.css";
import Calculator from "./components/Calculator";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import Button from "./components/Button";
import { useState, useEffect, useCallback } from "react";
import { evaluate } from "mathjs";

const numbers = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [typedNumbers, setTypedNumbers] = useState("");
  // const [results, setResults] = useState(0);

  function screenNumbers(e) {
    if (e.target.innerHTML === "=") {
      setTypedNumbers(evaluate(typedNumbers));
    } else if (e.target.innerHTML === "AC") {
      setTypedNumbers("");
    } else if (e.target.innerHTML === "+/-") {
      setTypedNumbers(-Math.abs(typedNumbers));
    } else {
      setTypedNumbers(typedNumbers + e.target.innerHTML);
    }
  }

  // useEffect(() => {
  //   console.log(typedNumbers);
  //   console.log(results);
  // }, [typedNumbers, results]);

  return (
    <>
      <Calculator>
        <Screen screenResult={typedNumbers} />
        <Keyboard>
          {numbers.flat().map((number, i) => {
            return (
              <Button key={number} onClick={screenNumbers}>
                {number}
              </Button>
            );
          })}
        </Keyboard>
      </Calculator>
    </>
  );
};

export default App;
