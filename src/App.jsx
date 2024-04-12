import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import product_list from "./assets/product";
import Products from "./components/Products/Products";
import NewArraivls from "./components/NewArraivls/NewArraivls";

function App() {
  return (
    <div className="app font-outFit">
      <Navbar />
      <Hero />
      <Products productList={product_list} />
      <NewArraivls />
    </div>
  );
}

export default App;
