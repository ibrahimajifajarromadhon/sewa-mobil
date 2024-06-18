/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// sebuah arrow function untuk mengatur component button yang dapat digunakan berulang-ulang
const Button = (props) => {
  // melakukan destructuring object dari properti yang dikirmkan ke component button ini
  const { style = "rounded-full w-36 h-12 my-5 bg-black text-lg text-white font-medium", children } = props;

  // mengembalikan component button
  return (
    <button
      className={`${style}`}
    >
      {children}
    </button>
  );
};

// mengexport fungsi button
export default Button;
