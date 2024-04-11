import { useRef, useState } from "react";
import Button from "../Button";
import Product from "./Product";
const Products = ({ productList }) => {
  const [activeSlider, setActiveSlider] = useState(false);
  const productWidth = useRef(350);
  const slider = useRef(null);
  function handleNextSlider() {
    setActiveSlider(true);
    slider.current.scrollLeft += productWidth.current + 15;
  }

  function handlePrevSlider() {
    setActiveSlider(true);
    slider.current.scrollLeft -= productWidth.current + 15;
  }

  return (
    <div className="relative">
      <div className="flex flex-col justify-start px-3 py-6">
        <h2 className="font-bold text-black text-4xl">Still Interested?</h2>
      </div>
      {/* map over products list  */}
      <div ref={slider} className="product-list h-full w-full relative">
        {productList.map((product, index) => {
          return <Product product={product} key={index} ref={productWidth} />;
        })}
        {/* slider btns */}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0">
        <Button handlre={handleNextSlider}>
          <i className="ri-arrow-right-line text-2xl font-bold"></i>
        </Button>
      </div>

      <div
        className={
          activeSlider ? "absolute top-1/2 -translate-y-1/2 left-0" : "hidden"
        }>
        <Button handlre={handlePrevSlider}>
          <i className="ri-arrow-left-line text-2xl font-bold"></i>
        </Button>
      </div>
    </div>
  );
};
Products.propTypes = {
  productList: Object,
};
export default Products;
