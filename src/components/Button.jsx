const Button = ({ children, handlre }) => {
  return (
    <div
      onClick={handlre}
      className="bg-white px-7 py-2 font-medium flex items-center cursor-pointer">
      {children}
    </div>
  );
};

Button.propTypes = {
  children: String,
  handlre: Function,
};
export default Button;
