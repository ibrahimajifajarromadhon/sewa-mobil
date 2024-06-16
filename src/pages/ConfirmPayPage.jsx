import { Link } from "react-router-dom";
import PayLayouts from "../components/Layouts/PayLayouts";
import Button from "../components/Elements/Button";

const ConfirmPayPage = () => {
  return (
    <PayLayouts>
      <Link to="/bayar">
        <Button style="rounded-full bg-white w-36 h-12 my-5 text-black font-bold">
          Kembali
        </Button>
      </Link>
      <div className="flex flex-col items-center mb-20">
        <h1 className="font-black text-4xl">Konfirmasi Pembayaran</h1>
        <div className="w-4/6 bg-white rounded-lg p-5 my-5">
          <h1 className="text-xl font-extrabold text-center">Rental Detail</h1>
          <h1 className="text-xl font-extrabold mt-5">All New Avanza</h1>
          <p className="text-gray-400 font-medium">Toyota</p>
          <img
            src="../src/assets/images/hero.svg"
            alt=""
            className="my-5 w-60"
          />
          <hr />
          <div className="flex justify-between mt-5">
            <p className="text-gray-400 font-medium">Sub Total</p>
            <p className="font-bold">Rp. 350.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 font-medium">Tax</p>
            <p className="font-bold">Rp. 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 font-medium">Payment Method</p>
            <p className="font-bold">Bank BRI</p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div>
              <p className="font-bold text-xl">Total Harga</p>
              <p className="text-gray-400 font-medium text-sm">
                Harga sudah termasuk diskon
              </p>
            </div>
            <p className="font-bold text-xl">Rp. 350.000</p>
          </div>
        </div>
        <div className="w-4/6 bg-white rounded-lg p-5 my-5">
          <h1 className="text-xl font-extrabold">Billing Info</h1>
          <p className="text-gray-400 font-medium text-sm">
            Masukkan data anda
          </p>
          <div className="flex my-5">
            <div className="w-1/2 pr-5">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                placeholder="Nama"
                defaultValue="Budi Yudi"
                className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="">No Hp</label>
              <input
                type="text"
                placeholder="No Hp"
                defaultValue="087778555555"
                className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-5">
              <label htmlFor="">Alamat</label>
              <input
                type="text"
                placeholder="Alamat"
                defaultValue="Jln. In Dulu Aja No. 123"
                className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="">Kota</label>
              <input
                type="text"
                placeholder="Kota"
                defaultValue="Los Santos"
                className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
              />
            </div>
          </div>
        </div>
        <div className="w-4/6 text-end">
          <Link to="/success">
            <Button style="rounded-full text-white font-medium text-lg bg-black px-14 h-12 mt-5">
              Booking
            </Button>
          </Link>
        </div>
      </div>
    </PayLayouts>
  );
};

export default ConfirmPayPage;
