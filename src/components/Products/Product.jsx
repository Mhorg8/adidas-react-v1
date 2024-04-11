const Product = ({ product, key, ref }) => {
  return (
    <div
      ref={ref}
      key={key}
      className="w-[350px] h-full flex flex-col col-sapn-12 md:col-span-6 lg:col-span-3">
      <div className="img-container w-[350px] h-[350px] relative ">
        <img
          className="w-full h-full object-cover"
          src={product.imgSrc}
          alt="product"
        />

        <i className="ri-heart-2-line absolute top-2 right-2 text-xl"></i>
        <p className="absolute bottom-2 left-4 bg-white text-xl">
          ${product.price}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-black text-xl font-semibold">{product._name}</p>
        <p className="text-gray text-base">{product.desc}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: Object,
  key: Number,
  ref: String,
};
export default Product;
