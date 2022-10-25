import styled from "styled-components";
import React from "react";
import Keyboard from "./Keyboard";

const Screen = (props) => {
  return <ScreenStyled>{}</ScreenStyled>;
};

export default Screen;

// quando a pessoa clica em algum botao, ele aparece na tela
// e se ela clicar em mais de um, todos aparecem na tela
// quando ela clica em = o mathjs faz a matematica
// qnd ela clica em AC deleta o ultimo botao

const ScreenStyled = styled.div`
  background: linear-gradient(45deg, #faf8f9, #ffffff);
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 0.5),
    0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  padding: 0px 10px;
  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: right;
  height: 45px;
`;
