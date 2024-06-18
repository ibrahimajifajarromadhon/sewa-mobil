/* eslint-disable react/prop-types */

// sebuah arrow function untuk mengatur layout normal
const NormalLayouts = ({ children, style }) => {
  // mengembalikan component layout normal
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-blue-300 to-gray-300 w-full p-5 px-10 text-black">
        <img src="../src/assets/images/logo.png" alt="" className="h-16" />
        <div className="w-full p-5 h-56 flex items-center mt-20 mb-44">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold mb-3">Sewa Mobil Murah</h1>
            <button className="font-bold text-sm border border-blue-500 rounded-full px-5 py-2">
              Temukan Mobil Yang Sempurna Untuk Anda Hari Ini
            </button>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <img
              src="../src/assets/images/hero.svg"
              alt=""
              className="w-full max-h-96"
            />
          </div>
        </div>
      </div>
      <div className="top"></div>
      <div className="flex-grow">
        {children}
        <div className="bottom mb-40"></div>
        <div className={`${style} bg-black flex w-full p-5 text-white h-56`}>
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
            <h1 className="font-light my-3">Whatsapp</h1>
            <h1 className="font-light my-3">Instagram</h1>
            <h1 className="font-light my-3">Facebook</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// mengexport fungsi normal layout
export default NormalLayouts;
