import { Link } from "react-router-dom";

const StartPage = () => {
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
      <div className="bg w-full h-96 flex justify-center">
        <Link to="/login">
          <button className="rounded-full text-white font-bold text-3xl bg-black w-44 h-16 my-28">
            Start
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

export default StartPage;
