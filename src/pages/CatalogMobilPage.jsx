import { Link } from "react-router-dom";

const CatalogMobilPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-blue-300 to-gray-300 w-full p-5 px-10 text-black">
        <img src="../src/assets/logo.png" alt="" className="h-16" />
        <div className="w-full p-5 h-56 flex items-center mt-20 mb-44">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold mb-3">Sewa Mobil Murah</h1>
            <button className="font-bold text-sm border border-blue-500 rounded-full px-5 py-2">
              Temukan Mobil Yang Sempurna Untuk Anda Hari Ini
            </button>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <img
              src="../src/assets/hero.svg"
              alt=""
              className="w-full max-h-96"
            />
          </div>
        </div>
      </div>
      <div className="top"></div>
      <div className="flex-grow ">
        <div className="bg w-full flex flex-col px-10">
          <h1 className="text-3xl font-bold mb-3 pt-5">Daftar Mobil</h1>
          <div className="grid grid-cols-4 gap-10 my-5">
            <div className="bg-white rounded-xl flex flex-col p-5 shadow-lg border border-gray-200">
              <h1 className="text-xl font-extrabold">All New Avanza</h1>
              <p className="text-gray-400 font-bold">Toyota</p>
              <img
                src="../src/assets/hero.svg"
                alt=""
                className="w-full max-h-96 py-10"
              />
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-extrabold">Rp.320.000</h1>
                  <p className="text-gray-400 font-bold">day</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link to="/bayar">
                    <button className="px-5 py-3 bg-blue-500 rounded-md text-white font-medium">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col p-5 shadow-lg border border-gray-200">
              <h1 className="text-xl font-extrabold">All New Avanza</h1>
              <p className="text-gray-400 font-bold">Toyota</p>
              <img
                src="../src/assets/hero.svg"
                alt=""
                className="w-full max-h-96 py-10"
              />
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-extrabold">Rp.320.000</h1>
                  <p className="text-gray-400 font-bold">day</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link to="/bayar">
                    <button className="px-5 py-3 bg-blue-500 rounded-md text-white font-medium">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col p-5 shadow-lg border border-gray-200">
              <h1 className="text-xl font-extrabold">All New Avanza</h1>
              <p className="text-gray-400 font-bold">Toyota</p>
              <img
                src="../src/assets/hero.svg"
                alt=""
                className="w-full max-h-96 py-10"
              />
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-extrabold">Rp.320.000</h1>
                  <p className="text-gray-400 font-bold">day</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link to="/bayar">
                    <button className="px-5 py-3 bg-blue-500 rounded-md text-white font-medium">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col p-5 shadow-lg border border-gray-200">
              <h1 className="text-xl font-extrabold">All New Avanza</h1>
              <p className="text-gray-400 font-bold">Toyota</p>
              <img
                src="../src/assets/hero.svg"
                alt=""
                className="w-full max-h-96 py-10"
              />
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-extrabold">Rp.320.000</h1>
                  <p className="text-gray-400 font-bold">day</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link to="/bayar">
                    <button className="px-5 py-3 bg-blue-500 rounded-md text-white font-medium">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Link to="/home">
              <button className="rounded-full text-white font-medium text-lg bg-black w-36 h-12 my-5">
                Kembali
              </button>
            </Link>
            <Link to="/ulasan">
              <button className="rounded-full text-white font-medium text-lg bg-black w-36 h-12 my-5">
                Ulasan
              </button>
            </Link>
          </div>
        </div>
        <div className="bottom mb-40"></div>

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
    </div>
  );
};

export default CatalogMobilPage;
