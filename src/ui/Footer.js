import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #76c7ad;
  text-align: center;
  font-weight: 700;
  padding: 3.2rem 0;
`;

function Footer({ children }) {
  return (
    <StyledFooter>
      <em>{children}</em>
    </StyledFooter>
  );
}

export default Footer;
