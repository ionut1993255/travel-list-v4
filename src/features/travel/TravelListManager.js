import styled from "styled-components";
import { useDispatch } from "react-redux";

import TravelItemList from "./TravelItemList";
import TravelItem from "./TravelItem";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { clearTravelItemsList } from "./travelSlice";

import { useLocalStorageTravelItemsState } from "../../hooks/useLocalStorageTravelItemsState";
import { useSortItems } from "../../hooks/useSortItems";

const StyledTravelListManager = styled.div`
  background-color: #5a3e2b;
  color: #ffebb3;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;

const StyledActionsContainer = styled.div`
  display: flex;
`;

export default function TravelListManager() {
  const dispatch = useDispatch();
  const { travelItems } = useLocalStorageTravelItemsState();
  const { sortBy, setSortBy, sortedItems } = useSortItems("input", travelItems);

  return (
    <StyledTravelListManager>
      <TravelItemList
        sortedItems={sortedItems}
        render={(item) => <TravelItem travelItem={item} key={item.id} />}
      />

      {travelItems.length > 0 && (
        <StyledActionsContainer>
          <Select
            id="sort-select"
            type="sort"
            options={[
              { value: "input", label: "Sort by input order" },
              { value: "description", label: "Sort by description" },
              { value: "packed", label: "Sort by packed status" },
            ]}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          />

          <Modal>
            <Modal.Open opens="clear-list">
              <Button type="primary">Clear list</Button>
            </Modal.Open>

            <Modal.Window name="clear-list">
              <ConfirmDelete
                resourceName="travel item list"
                onConfirm={() => dispatch(clearTravelItemsList())}
              />
            </Modal.Window>
          </Modal>
        </StyledActionsContainer>
      )}
    </StyledTravelListManager>
  );
}
