/* eslint-disable react/prop-types */
const PlainLayouts = ({ children, style }) => {
  return <div className={`flex justify-center ${style}`}> {children} </div>;
};

export default PlainLayouts;
