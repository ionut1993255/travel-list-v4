import styled from "styled-components";

const StyledTravelItemList = styled.ul`
  list-style: none;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  justify-content: center;
  align-content: start;
`;

function TravelItemList({ sortedItems, render }) {
  return <StyledTravelItemList>{sortedItems.map(render)}</StyledTravelItemList>;
}

export default TravelItemList;
