import styled, { css } from "styled-components";

const baseSelectStyles = css`
  background-color: #ffebb3;
  color: #5a3e2b;
  font-family: inherit;
  border: none;
  border-radius: 10rem;
  padding: 1.2rem 3.2rem;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
`;

const sortSelectStyles = css`
  text-transform: uppercase;
  padding: 0.8rem 2.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0.8rem;
`;

const StyledSelect = styled.select`
  ${baseSelectStyles}
  ${(props) => props.type === "sort" && sortSelectStyles}
`;

function Select({ options, value, onChange, type, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} type={type} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
