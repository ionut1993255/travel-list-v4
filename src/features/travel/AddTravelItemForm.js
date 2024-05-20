import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Heading from "../../ui/Heading";
import Select from "../../ui/Select";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { addTravelItems } from "./travelSlice";

const StyledAddTravelItemForm = styled.form`
  background-color: #e5771f;
  padding: 2.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export default function AddTravelItemForm() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newTravelItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    dispatch(addTravelItems(newTravelItem));
    setQuantity(1);
    setDescription("");
  }

  return (
    <StyledAddTravelItemForm onSubmit={handleSubmit}>
      <Heading as="h3">What do you need for your 😍 trip?</Heading>

      <Select
        id="quantity-select"
        options={Array.from({ length: 20 }, (_, i) => ({
          value: i + 1,
          label: `${i + 1}`,
        }))}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <Input
        id="description-input"
        type="text"
        placeholder="Add travel item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button type="submit">Add</Button>
    </StyledAddTravelItemForm>
  );
}
