import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex justify-center my-32">
      <div className="flex flex-col items-center justify-center">
        <img src="../src/assets/success.svg" alt="" className="w-1/3" />
        <h1 className="text-5xl font-black my-5">Transaksi Berhasil</h1>
        <div className="flex justiy-between gap-5">
          <Link to="/confirm">
            <button className="bg-gray-600 px-14 h-12 rounded-md mt-5 font-bold text-white">
              Kembali Ke Home
            </button>
          </Link>
          <Link to="/ulasan">
            <button className="bg-gray-600 px-12 h-12 rounded-md mt-5 font-bold text-white">
              Ulasan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
