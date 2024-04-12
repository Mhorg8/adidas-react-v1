const Button = ({ children, handlre, classA }) => {
  return (
    <div
      onClick={handlre}
      className={
        classA
          ? "bg-black border border-black text-white px-7 py-2 font-bold flex items-center cursor-pointer  "
          : "bg-white border border-black text-blacks px-7 py-2 font-bold flex items-center cursor-pointer"
      }>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: String,
  handlre: Function,
  classA: String,
};
export default Button;
