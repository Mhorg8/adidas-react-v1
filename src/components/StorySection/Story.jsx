import Button from "../Button";

const Story = () => {
  return (
    <div className=" w-full bg-soft-gray mt-20">
      <div className="container grid grid-cols-12 py-10 gap-10 mb-10">
        <div className="col-span-12 md:col-span-6 w-[80%] md:w-full">
          <h3 className="text-[28px] font-semibold text-black mb-3 w-full">
            Stories, style, and sporting goods at adidas, since <br /> 1949
          </h3>
          <p className="font-light text-justify">
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.
            adidas is home to the runner, the basketball player, the soccer kid,
            the fitness enthusiast, the yogi. And even the weekend hiker looking
            to escape the city. The 3-Stripes are everywhere and anywhere. In
            sports. In music. On life’s stages. Before the whistle blows, during
            the race, and at the finish line. We’re here to support creators. To
            improve their game. To live their lives. And to change the world.
          </p>
          <p className="font-light text-justify mt-3">
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sporting goods, style and clothing that match the athletic
            needs, while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 w-[80%] md:w-full">
          <h3 className="text-[28px] font-semibold text-black mb-3">
            Workout clothes, for any sport
          </h3>
          <p className="font-light text-justify">
            adidas designs for athletes of all kinds. Creators who love to
            change the game. People who challenge conventions, break the rules,
            and define new ones. Then break them all over again. We design
            sports apparel that gets you moving, winning, and living life to the
            fullest. We create bras and tights for female athletes who play just
            as hard as the men. From low to high support. Maximum comfort. We
            design, innovate and iterate. We test new technologies in action. On
            the field, the track, the court, and in the pool. We’re inspired by
            retro workout clothes, creating new streetwear essentials. From NMD
            and Ozweego to our Firebird tracksuits. From Stan Smith to
            Superstar. Classic sports models are brought back to life on the
            streets and the stages around the world.
          </p>
          <p className="font-light text-justify mt-3">
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sports apparel too. Our lives are constantly
            changing. Becoming more and more versatile. And adidas designs with
            that in mind.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-center items-center justify-center gap-x-10 w-full bg-yellow py-12">
        <h2 className="font-bold text-black text-3xl md:text-3xl">
          JOIN OUR ADICLUB &<br className="md:hidden" /> GET 15% OFF
        </h2>
        <Button classA>
          SIGN UP FOR FREE <i className="ri-arrow-right-line ml-3 text-xl"></i>
        </Button>
      </div>
    </div>
  );
};

export default Story;
