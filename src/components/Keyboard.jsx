import styled from "styled-components";
import Button from "./Button";
import Screen from "./Screen";
import { useState, useEffect, useCallback } from "react";
import { evaluate } from "mathjs";

const Keyboard = (props) => {
  const [typedNumbers, setTypedNumbers] = useState("");
  const [results, setResults] = useState(0);

  function screenNumbers(number) {
    if (number === "=") {
      setResults(evaluate(typedNumbers));
    } else {
      setTypedNumbers(typedNumbers + number);
    }
  }

  //   useEffect(() => {
  //     console.log(typedNumbers);
  //     console.log(results);
  //   }, [typedNumbers, results]);

  return (
    <>
      <KeyboardStyled>
        {props.numbers.flat().map((number, i) => {
          return (
            <Button key={number} onClick={() => screenNumbers(number)}>
              {number}
            </Button>
          );
        })}
      </KeyboardStyled>
    </>
  );
};

export default Keyboard;

const KeyboardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 250px;
`;
