import React, { useState } from 'react';

const DropdowndMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
        {isOpen ? 'Închide Meniul' : 'Deschide Meniul'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Opțiune 1</li>
          <li>Opțiune 2</li>
          <li>Opțiune 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;