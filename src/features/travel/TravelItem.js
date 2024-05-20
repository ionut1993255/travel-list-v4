import styled from "styled-components";
import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { toggleTravelItem, deleteTravelItem } from "./travelSlice";

const StyledTravelItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StyledTravelItemDescription = styled.span`
  ${({ packed }) => packed && "text-decoration: line-through;"}
`;

export default function TravelItem({ travelItem }) {
  const dispatch = useDispatch();

  const { description, quantity, packed, id } = travelItem;

  return (
    <StyledTravelItem packed={packed}>
      <Input
        id={`checkbox-${id}`}
        type="checkbox"
        checked={packed}
        onChange={() => dispatch(toggleTravelItem(id))}
      />

      <StyledTravelItemDescription packed={packed}>
        {quantity} {description}
      </StyledTravelItemDescription>

      <Modal>
        <Modal.Open opens="delete-travel-item">
          <Button type="secondary">❌</Button>
        </Modal.Open>
        <Modal.Window name="delete-travel-item">
          <ConfirmDelete
            resourceName="travel item"
            onConfirm={() => dispatch(deleteTravelItem(id))}
          />
        </Modal.Window>
      </Modal>
    </StyledTravelItem>
  );
}
