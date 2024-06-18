/* eslint-disable react/prop-types */
// sebuah arrow function untuk mengatur layout pay
const PayLayouts = ({ children, style, style1 }) => {
  // mengembalikan component layout pay
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <div className={`flex-grow w-full flex flex-col px-5 ${style}`}>
        {children}
      </div>
      <div className={`bg-black flex w-full p-5 text-white h-56 ${style1}`}>
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
  );
};

// mengexport fungsi pay layout
export default PayLayouts;
