/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// mengimpor modul-modul yang diperlukan
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

//sebuah arrow function untuk mengatur card mobil yang berisi header, body dan footer
const CardMobil = ({ children }) => {
  // mengembalikan component card mobil
  return (
    <div className="bg-white rounded-xl flex flex-col justify-between p-5 shadow-lg border border-gray-200">
      {children}
    </div>
  );
};

//sebuah arrow function untuk mengatur component header
const Header = ({ name, merk }) => {
  // mengembalikan component header
  return (
    <div>
      <h1 className="text-xl font-extrabold">{name}</h1>
      <p className="text-gray-400 font-bold">{merk}</p>
    </div>
  );
};

// sebuah arrow function untuk mengatur component body
const Body = ({ images }) => {
  // mengembalikan component body
  return (
    <div>
      <img src={images} alt="" className="w-full max-h-96 py-10" />
    </div>
  );
};

// sebuah arrow function untuk mengatur component footer
const Footer = ({ price, long }) => {
  // mengembalikan component footer
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

// mengimpor fungsi header, body dan footer
CardMobil.Header = Header;
CardMobil.Body = Body;
CardMobil.Footer = Footer;

// mengexport fungsi cardnya
export default CardMobil;
