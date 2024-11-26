import React, { useContext, useState } from "react";
import MedContext from "../store/medContext";
import CartContext from "../store/cartContext";

import "./SearchableList.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function SearchableList() {
  const medCntx = useContext(MedContext);
  const cartCntx = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = medCntx.items.filter((item) =>
    item.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCartClick = (item) => {
    // console.log(item);
    cartCntx.addItem(item);
    medCntx.quantityChange(item.id);
  };

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
                <button
                  disabled={medCntx.flag}
                  onClick={() => handleAddToCartClick(item)}
                >
                  {medCntx.flag ? "Out of Stock" : "Add to Cart"}
                </button>
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
