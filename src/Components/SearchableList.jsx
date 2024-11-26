import React, { useContext, useState } from "react";
import MedContext from "../store/med-context";
import CartContext from "../store/cart-context";

import "./SearchableList.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function SearchableList() {
  const medCntx = useContext(MedContext);
  const cartCntx = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = medCntx.items.filter(
    (item) => item.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCartClick =(item)=>{
    // console.log(item);
    cartCntx.addItem(item);
  }

  return (
    <div className="searchable-list-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search medicines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="list-item">
              <div>
                <span className="listItem-properties">{item.medicineName}</span>
                <span className="listItem-properties">{item.description}</span>
              </div>
              <div>
                <span className="listItem-properties">{item.price}</span>
                <span className="listItem-properties">{item.quantity}</span>
                <button onClick={()=>handleAddToCartClick(item)}>Add to Cart</button>
              </div>
            </li>
          ))
        ) : (
          <li className="no-results">No items match your search</li>
        )}
      </ul>
    </div>
  );
}
