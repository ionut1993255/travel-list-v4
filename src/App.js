import styled from "styled-components";
import { Toaster } from "react-hot-toast";

import Logo from "./ui/Logo";
import AddTravelItemForm from "./features/travel/AddTravelItemForm";
import TravelListManager from "./features/travel/TravelListManager";
import TravelStats from "./features/travel/TravelStats";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

export default function App() {
  return (
    <>
      <StyledApp>
        <Logo />
        <AddTravelItemForm />
        <TravelListManager />
        <TravelStats />
      </StyledApp>

      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#76c7ad",
              secondary: "#ffebb3",
            },
          },
          style: {
            maxWidth: "500px",
            fontSize: "16px",
            fontWeight: 600,
            padding: "16px 24px",
            color: "#5a3e2b",
            backgroundColor: "#ffebb3",
          },
        }}
      />
    </>
  );
}
