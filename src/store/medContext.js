import React from "react";

const MedContext = React.createContext({
  items: [],
  addItem: (item) => {},
  quantityChange: (item) => {},
  flag: false,
  removeItem: (id) => {},
});

export default MedContext;
