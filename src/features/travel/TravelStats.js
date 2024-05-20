import Footer from "../../ui/Footer";

import { useLocalStorageTravelItemsState } from "../../hooks/useLocalStorageTravelItemsState";

export default function TravelStats() {
  const { travelItems } = useLocalStorageTravelItemsState();

  if (!travelItems.length)
    return (
      <Footer>Start adding some items to your travel packing list 🚀</Footer>
    );

  const numTravelItems = travelItems.length;
  const numTravelItemsPacked = travelItems.filter((item) => item.packed).length;
  const percentage = Math.round((numTravelItemsPacked / numTravelItems) * 100);

  return (
    <Footer>
      {percentage === 100
        ? "You got everything! Ready to go ✈"
        : `💼 You have ${numTravelItems}
            ${
              numTravelItems === 0 || numTravelItems !== 1 ? "items" : "item"
            } on your travel packing list,
            and you already packed ${numTravelItemsPacked} (${percentage}%).`}
    </Footer>
  );
}
