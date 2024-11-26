import React, { useState } from "react";
import MedContext from "./med-context";

const MedProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToList = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const medContext = {
    items: items,
    addItem: addItemToList,
    removeItem: (id) => {},
  };

  return (
    <MedContext.Provider value={medContext}>
      {props.children}
    </MedContext.Provider>
  );
};

export default MedProvider;
