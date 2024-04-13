import Navbar from "../components/Navbar/Navbar";
const ShoppingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-start gap-y-5 mt-20">
        <h1 className="font-bold text-4xl">YOUR BAG IS EMPTY</h1>
        <p className="text-lg">
          Once you add something to your bag, it will appear here. Ready to get
          started?
        </p>
        <button className="w-fit bg-black text-white text-xl font-bold py-2 px-5">
          GET STARTED
        </button>
      </div>
    </>
  );
};

export default ShoppingPage;
