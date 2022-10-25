import "./App.css";
import Calculator from "./components/Calculator";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";


const numbers = [
  ["AC", "+/-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const App = () => {
  return (
    <>
      <Calculator>
        <Screen />
        <Keyboard numbers={numbers}/>
              </Calculator>
    </>
  );
};

export default App;
