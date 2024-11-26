import React from 'react';

const MedContext = React.createContext({
  items:[],
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default MedContext;