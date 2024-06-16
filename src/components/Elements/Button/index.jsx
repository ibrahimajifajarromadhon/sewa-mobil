/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = (props) => {
  const { style = "rounded-full w-36 h-12 my-5 bg-black text-lg text-white font-medium", children } = props;

  return (
    <button
      className={`${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
