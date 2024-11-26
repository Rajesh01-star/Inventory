import React, { useState } from "react";
import MedContext from "./medContext";

const MedProvider = (props) => {
  const [items, setItems] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleItemAdd = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleQuantityChange = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            setFlag(true);
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const medContext = {
    items: items,
    addItem: handleItemAdd,
    quantityChange: handleQuantityChange,
    flag: flag,
    removeItem: (id) => {},
  };

  return (
    <MedContext.Provider value={medContext}>
      {props.children}
    </MedContext.Provider>
  );
};

export default MedProvider;
