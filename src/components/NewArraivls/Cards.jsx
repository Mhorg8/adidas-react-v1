import CardOne from "../../assets/card-1.gif";
import CardTwo from "../../assets/card-2.avif";
import CardThree from "../../assets/card-3.mp4";
import CardFour from "../../assets/card-4.avif";
const Cards = () => {
  return (
    <div className="container mt-10 grid grid-cols-12 grid-flow-col gap-x-5 justify-start gap-y-10 overflow-x-scroll cards">
      <div className="flex flex-col justify-between gap-y-3 col-span-12 md:col-span-4 lg:col-span-3 w-full h-full">
        <div className="image-container max-h-[370px]">
          <img className="w-full h-full object-cover " src={CardOne} />
        </div>

        <div>
          <h3 className=" font-bold text-black text-lg">AN ADICOLOR STORY</h3>
          <p className="text-[14px] text-gray">Paint it lavender</p>
        </div>

        <button className="w-fit font-bold text-black text-lg underline hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>

      <div className="flex flex-col justify-between gap-y-3 col-span-12 md:col-span-4 lg:col-span-3 w-full h-full">
        <div className="image-container max-h-[370px]">
          <video className="w-full h-full object-cover " src={CardThree} />
        </div>

        <div>
          <h3 className=" font-bold text-black text-lg">FOR THE FAST</h3>
          <p className="text-[14px] text-gray">
            Meet our record-breaking running shoe family
          </p>
        </div>

        <button className="w-fit font-bold text-black text-lg underline hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>

      <div className="flex flex-col justify-between gap-y-3 col-span-12 md:col-span-4 lg:col-span-3 w-full h-full">
        <div className="image-container max-h-[370px]">
          <img className="w-full h-full object-cover " src={CardTwo} />
        </div>

        <div>
          <h3 className=" font-bold text-black text-lg">ENERGY CITRUS PACK</h3>
          <p className="text-[14px] text-gray">
            Discover the new predator , X and Copa
          </p>
        </div>

        <button className="w-fit font-bold text-black text-lg underline hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>

      <div className="flex flex-col justify-between gap-y-3 col-span-12 md:col-span-4 lg:col-span-3 w-full h-full">
        <div className="image-container max-h-[370px]">
          <img className="w-full h-full object-cover " src={CardFour} />
        </div>

        <div>
          <h3 className=" font-bold text-black text-lg">
            SPRING BREAK MENTALITY
          </h3>
          <p className="text-[14px] text-gray">
            Fresh look for the season are here_time to dream up <br /> your
            spring style
          </p>
        </div>

        <button className="w-fit font-bold text-black text-lg underline hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Cards;
