import AddProductForm from "./Components/AddProductForm";
import Medicines from "./Medicines/Medicines";
import SearchableList from "./Components/SearchableList";
import MedProvider from "./store/medProvider";
import CartProvider from "./store/cartProvider";

import "./App.css";

function App() {
  return (
    <MedProvider>
      <CartProvider>
        <div className="App">
          <AddProductForm />
          <SearchableList />
          <main>
            {/* <Medicines /> */}
          </main>
        </div>
      </CartProvider>
    </MedProvider>
  );
}

export default App;
