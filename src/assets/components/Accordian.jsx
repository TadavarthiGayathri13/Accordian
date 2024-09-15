import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="arrow-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
