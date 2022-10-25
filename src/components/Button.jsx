import styled from "styled-components";

const Button = (props) => (
  <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  background: linear-gradient(45deg, #eeeeee, #faf8f9, #ffffff);
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 0.5),
    0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: none;

  margin: 5px;
  height: 50px;
  width: 50px;

  &:nth-last-child(3) {
    width: 110px;
  }

  &:hover {
    cursor: pointer;
  }
`;
