import { Link } from "react-router-dom";

const RekomendasiMobilPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 to-gray-300 w-full h-svh p-5 px-10 text-black">
        <img src="../src/assets/logo.png" alt="" className="h-16" />
        <div className="w-full p-5 h-56 flex items-center my-20">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold mb-3">Sewa Mobil Murah</h1>
            <button className="font-bold text-sm border border-blue-500 rounded-full px-5 py-2">
              Temukan Mobil Yang Sempurna Untuk Anda Hari Ini
            </button>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <img src="../src/assets/hero.svg" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="top"></div>
      <div className="bg w-full h-96 flex flex-col items-center">
        <h1 className="text-3xl font-black mb-3">Rekomendasi mobil:</h1>
        <p className="font-light text-sm">
          Kami menyiapkan beberapa rekomendasi mobil untuk anda
        </p>
        <div className="flex my-5">
          <div className="flex justify-center mx-3 gap-10">
            <div className="bg-gray-400 rounded-2xl flex flex-col items-center justify-center pb-5">
              <div className="bg-white rounded-2xl px-5">
                <img
                  src="../src/assets/avanza.svg"
                  alt=""
                  className="h-64 w-64"
                />
              </div>
              <h1 className="font-bold text-xl mt-3 mb-2">All New Avanza</h1>
              <p className="text-gray-700 font-bold text-md">Toyota</p>
            </div>
            <div className="bg-gray-400 rounded-2xl flex flex-col items-center justify-center pb-5">
              <div className="bg-white rounded-2xl px-5">
                <img
                  src="../src/assets/terios.svg"
                  alt=""
                  className="h-64 w-64"
                />
              </div>
              <h1 className="font-bold text-xl mt-3 mb-2">All New Terios</h1>
              <p className="text-gray-700 font-bold text-md">Daihatsu</p>
            </div>
            <div className="bg-gray-400 rounded-2xl flex flex-col items-center justify-center pb-5">
              <div className="bg-white rounded-2xl px-5">
                <img
                  src="../src/assets/brio.svg"
                  alt=""
                  className="h-64 w-64"
                />
              </div>
              <h1 className="font-bold text-xl mt-3 mb-2">Brio</h1>
              <p className="text-gray-700 font-bold text-md">Honda</p>
            </div>
          </div>
        </div>
        <Link to="/catalog">
        <button className="rounded-full text-white font-medium text-lg bg-black px-10 h-12 my-5">
            Lihat mobil lainnya
          </button>
        </Link>
      </div>
      <div className="bottom"></div>
      <div className="bg-black flex w-full p-5 mt-56 text-white h-56">
        <div className="w-5/6 ">
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
    </>
  );
};

export default RekomendasiMobilPage;
