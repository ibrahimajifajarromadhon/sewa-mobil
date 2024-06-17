import { Link } from "react-router-dom";
import Button from "../../components/Elements/Button";
import NormalLayouts from "../../components/Layouts/NormalLayouts";

const KodeVerifikasiPage = () => {
  return (
    <NormalLayouts>
      <div className="bg w-full h-96 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-3">Masukkan kode verifikasi</h1>
        <input
          type="text"
          placeholder="Kode verifikasi"
          className="text-lg bg-gray-500 text-white rounded-xl p-3 w-2/5"
        />
        <p className="text-lg font-medium text-gray-600 my-3">
          Kode akan dikirimkan ke email anda
        </p>
        <Link to="/home">
          <Button style="rounded-full text-lg bg-black w-36 h-12 font-bold text-white">Masuk</Button>
        </Link>
      </div>
    </NormalLayouts>
  );
};

export default KodeVerifikasiPage;
