import AddProductForm from "./Components/AddProductForm";
import SearchableList from "./Components/SearchableList";
import CartItems from "./Cart/CartItems";

import MedProvider from "./store/medProvider";
import CartProvider from "./store/cartProvider";

import "./App.css";
import { useState } from "react";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const showCartItemsHandler = () => {
    setCartVisible(true);
  };
  const hideCartItemHandler = () =>{
    setCartVisible(false);
  }

  return (
    <MedProvider>
      <CartProvider>
        <div className="App">
          {cartVisible && <CartItems onClose={hideCartItemHandler} />}
          <AddProductForm onShowCartItems={showCartItemsHandler} />
          <SearchableList />
        </div>
      </CartProvider>
    </MedProvider>
  );
}

export default App;
