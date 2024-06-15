import { Link } from "react-router-dom";

const ConfirmPembayaranPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <div className="flex-grow w-full flex flex-col px-5">
        <Link to="/bayar">
          <button className="rounded-full font-bold text-lg bg-white w-36 h-12 my-5">
            Kembali
          </button>
        </Link>
        <div className="flex flex-col items-center mb-20">
          <h1 className="font-black text-4xl">Konfirmasi Pembayaran</h1>
          <div className="w-4/6 bg-white rounded-lg p-5 my-5">
            <h1 className="text-xl font-extrabold text-center">
              Rental Detail
            </h1>
            <h1 className="text-xl font-extrabold mt-5">All New Avanza</h1>
            <p className="text-gray-400 font-medium">Toyota</p>
            <img src="../src/assets/hero.svg" alt="" className="my-5 w-60" />
            <hr />
            <div className="flex justify-between my-5">
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
              <button className="bg-gray-600 px-10 h-12 rounded-md mt-5 font-bold text-white">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black flex w-full p-5 text-white h-56">
        <div className="w-5/6">
          <h1 className="text-4xl font-extrabold text-blue-500 mb-3">
            Sewa Mobil Murah
          </h1>
          <p className="font-light text-sm">
            Kepuasan pelanggan adalah tujuan utama kami
          </p>
        </div>
        <div className="w-1/6">
          <h1 className="font-bold mb-5">Socials</h1>
          <h1 className="font-light my-3">Instagram</h1>
          <h1 className="font-light my-3">Facebook</h1>
          <h1 className="font-light my-3">Whatsapp</h1>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPembayaranPage;
