import AddProductForm from "./Components/AddProductForm";
import Medicines from "./Medicines/Medicines";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddProductForm />
      <main>
        <Medicines />
      </main>
    </div>
  );
}

export default App;
