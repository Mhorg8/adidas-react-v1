const PopularNow = () => {
  return (
    <div className="container flex flex-col items-start mt-20 px-10">
      <h3 className="text-[42px] font-bold">Popular right now</h3>

      <div className="grid grid-cols-12 w-full gap-x-10 gap-y-10 mt-10 ">
        <PopularItem>samba</PopularItem>
        <PopularItem>campus</PopularItem>
        <PopularItem>gazelle</PopularItem>
        <PopularItem>messi</PopularItem>
        <PopularItem>ultraboost</PopularItem>
        <PopularItem>nmd</PopularItem>
      </div>
    </div>
  );
};

function PopularItem({ children }) {
  return (
    <div className="col-span-12 md:col-span-4 w-[80%] md:w-full border-b-2 hover:border-b-8 border-black pb-3">
      <h2 className="text-[38px] font-bold text-black cursor-pointer">
        {children}
      </h2>
    </div>
  );
}

PopularItem.propTypes = {
  children: String,
};

export default PopularNow;
