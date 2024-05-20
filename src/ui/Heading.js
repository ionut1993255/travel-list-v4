import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      text-align: center;
      background-color: #f4a226;
      font-family: "Monoton";
      font-size: 8rem;
      text-transform: uppercase;
      font-weight: 400;
      word-spacing: 30px;
      letter-spacing: -5px;
      padding: 2.4rem 0;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      margin-right: 1.6rem;
      font-size: 2.4rem;
    `}
`;

export default Heading;
