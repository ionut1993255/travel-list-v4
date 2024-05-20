import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.type === "text" &&
    css`
      background-color: #ffebb3;
      color: #5a3e2b;
    `}

  ${(props) =>
    props.type === "checkbox" &&
    css`
      height: 2rem;
      width: 2rem;
      accent-color: #e5771f;
    `}

  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 10rem;
  cursor: pointer;
`;

export default Input;
