/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CardMobil = ({ children }) => {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-between p-5 shadow-lg border border-gray-200">
      {children}
    </div>
  );
};

const Header = ({ name, merk }) => {
  return (
    <div>
      <h1 className="text-xl font-extrabold">{name}</h1>
      <p className="text-gray-400 font-bold">{merk}</p>
    </div>
  );
};

const Body = ({ images }) => {
  return (
    <div>
      <img src={images} alt="" className="w-full max-h-96 py-10" />
    </div>
  );
};

const Footer = ({ price, long }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl font-extrabold">{price}</h1>
        <p className="text-gray-400 font-bold">{long}</p>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/bayar">
          <Button style="rounded-md bg-blue-500 px-5 py-3 font-medium text-white">Rent Now</Button>
        </Link>
      </div>
    </div>
  );
};

CardMobil.Header = Header;
CardMobil.Body = Body;
CardMobil.Footer = Footer;

export default CardMobil;
