import styled, { css } from "styled-components";

const baseButtonStyles = css`
  font-family: inherit;
  font-weight: 700;
  color: #5a3e2b;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;
  cursor: pointer;
`;

const variations = {
  primary: css`
    ${baseButtonStyles}
    background-color: #ffebb3;
    padding: 0.8rem 2.4rem;
    font-size: 1.4rem;
    margin: 0 0.8rem;
  `,
  secondary: css`
    ${baseButtonStyles}
    background: none;
    font-size: 1.8rem;
    padding: 0.8rem;
    transform: translateY(2px);
  `,
  danger: css`
    ${baseButtonStyles}
    color: #ffebb3;
    background-color: red;
    padding: 0.8rem 2.4rem;
  `,
  submit: css`
    ${baseButtonStyles};
    background-color: #76c7ad;
    padding: 1.2rem 3.2rem;
    font-size: 1.8rem;
  `,
};

const StyledButton = styled.button`
  ${(props) => variations[props.type]}
`;

function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
