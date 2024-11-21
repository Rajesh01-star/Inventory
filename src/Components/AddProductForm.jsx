import React, { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import "./AddProductForm.css";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    medicineName: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", formData);
    setFormData({ medicineName: "", description: "", price: "", quantity: "" });
  };

  return (
    <section className="form-container">
      <form className="form-container-row" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <label htmlFor="medicineName" className="form-label-row">
            Medicine Name:
          </label>
          <input
            type="text"
            id="medicineName"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleChange}
            className="form-input-row"
            placeholder="Enter medicine name"
            required
          />
        </div>
        <div className="form-group-row">
          <label htmlFor="description" className="form-label-row">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input-row"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="form-group-row">
          <label htmlFor="price" className="form-label-row">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-input-row"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group-row">
          <label htmlFor="quantity" className="form-label-row">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="form-input-row"
            placeholder="Enter quantity"
            required
          />
        </div>
        <button type="submit" className="form-button-row">
          Add Product
        </button>
      </form>
      <span className="icon">
        <CartIcon />
      </span>{" "}
    </section>
  );
}
