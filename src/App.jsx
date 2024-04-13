import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import product_list from "./assets/product";
import Products from "./components/Products/Products";
import NewArraivls from "./components/NewArraivls/NewArraivls";
import Cards from "./components/NewArraivls/Cards";
import PopularNow from "./components/PopularNow/PopularNow";
import Story from "./components/StorySection/Story";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app font-outFit">
      <Navbar />
      <Hero />
      <Products productList={product_list} />
      <NewArraivls />
      <Cards />
      <PopularNow />
      <Story />

      <Footer />
    </div>
  );
}

export default App;
