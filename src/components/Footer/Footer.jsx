import footer_items from "../../assets/footerItems";
const Footer = () => {
  return (
    <footer className=" container flex items-start justify-center gap-x-10 py-14">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">PRODUCTS</h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          {footer_items[0].map((item, index) => (
            <li key={index} className="text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">SPORTS</h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          {footer_items[1].map((item, index) => (
            <li key={index} className="text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">COLLECTIONS</h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          {footer_items[2].map((item, index) => (
            <li key={index} className="text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">SUPPORT</h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          {footer_items[3].map((item, index) => (
            <li key={index} className="text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold">COMPANY INFO</h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          {footer_items[4].map((item, index) => (
            <li key={index} className="text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold leading-5">
          FOLLOW <br /> US
        </h3>
        <ul className="flex flex-col h-full w-full gap-x-4 gap-y-1  ">
          <i className="ri-facebook-circle-fill text-[24px] social-icon "></i>
          <i className="ri-instagram-fill text-[24px] social-icon "></i>
          <i className="ri-twitter-fill text-[24px] social-icon "></i>
          <i className="ri-pinterest-fill text-[24px] social-icon "></i>
          <i className="ri-tiktok-fill text-[24px] social-icon "></i>
          <i className="ri-youtube-fill text-[24px] social-icon "></i>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
