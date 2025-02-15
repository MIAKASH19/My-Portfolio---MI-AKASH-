import React, { useState } from "react";

const Example = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  const [showAll, setShowAll] = useState(false);

  // Get the items to display based on the state
  const displayedItems = showAll ? items : items.slice(-2); // Last two items only

  return (
    <div className="Example  my-10 ">
      {displayedItems.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-2 bg-blue-500 text-white text-sm rounded-full px-4 py-2 font-semibold"
      >
        {showAll ? "Show Less" : "Show All Items"}
      </button>
    </div>
  );
};

export default Example;
