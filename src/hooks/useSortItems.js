import { useState } from "react";

export function useSortItems(initialSortBy, items) {
  const [sortBy, setSortBy] = useState(initialSortBy);

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return { sortBy, setSortBy, sortedItems };
}
