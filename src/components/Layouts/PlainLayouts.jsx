/* eslint-disable react/prop-types */

// sebuah arrow function untuk mengatur layout plain
const PlainLayouts = ({ children, style }) => {
  // mengembalikan component layout plain
  return <div className={`flex justify-center ${style}`}> {children} </div>;
};

// mengexport fungsi plain layout
export default PlainLayouts;
