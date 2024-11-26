import { useContext } from "react";
import MedContext from "../store/medContext";
import Modal from "../UI/Modal";

export default function CartItems(props) {
  const medCntx = useContext(MedContext);

  return (
    <>
      <Modal>
        <div>
          <h2>Cart Items</h2>
          {medCntx.items.length > 0 ? (
            <ul>
              {medCntx.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.medicineName}</strong> - {item.description} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
        <button onClick={props.onClose}>Close</button>
      </Modal>
    </>
  );
}
