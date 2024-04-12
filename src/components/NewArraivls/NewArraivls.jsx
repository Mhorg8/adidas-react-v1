import { useState } from "react";
import Button from "../Button";
import Slider from "../NewArraivls/Slider";

const NewArraivls = () => {
  const [activeFilter, setActiveFilter] = useState("New Arraivals");

  function handleActiveFilter(fillter) {
    setActiveFilter(fillter);
  }
  return (
    <div className="container">
      {/* actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-20">
        <div className="flex items-center gap-x-3">
          <Button
            classA={activeFilter === "New Arraivals" ? true : false}
            handlre={() => handleActiveFilter("New Arraivals")}>
            New Arraivals
          </Button>

          <Button
            classA={activeFilter === "What's Trending" ? true : false}
            handlre={() => handleActiveFilter("What's Trending")}>
            {`What's Trending`}
          </Button>
        </div>

        <p className="text-lg md:text-xl border-b-2 leading-6 border-black cursor-pointer mt-5 md:mt-0">
          VIEW ALL
        </p>
      </div>

      {/* <Slider /> */}
      <Slider />
    </div>
  );
};

export default NewArraivls;
