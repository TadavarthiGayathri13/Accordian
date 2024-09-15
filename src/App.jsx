import React from "react";
import Accordion from "./assets/components/Accordian";

function App() {
  return (
    <div className="accordion-container">
      <h2 className="text-2xl font-bold mb-4 text-center">Accordion Example</h2>
      <Accordion title="Accordion Item 1" content="Content for item 1 goes here." />
      <Accordion title="Accordion Item 2" content="Content for item 2 goes here." />
      <Accordion title="Accordion Item 3" content="Content for item 3 goes here." />
    </div>
  );
}

export default App;
