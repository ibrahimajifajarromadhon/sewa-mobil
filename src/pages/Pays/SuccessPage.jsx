// mengimpor modul-modul yang diperlukan
import { Link } from "react-router-dom";
import Button from "../../components/Elements/Button";
import PlainLayouts from "../../components/Layouts/PlainLayouts";

// sebuah arrow function untuk mengatur halaman success
const SuccessPage = () => {
  return (
    <PlainLayouts style="my-32">
      <div className="flex flex-col items-center justify-center">
        <img src="../src/assets/images/success.svg" alt="" className="w-1/3" />
        <h1 className="text-5xl font-black my-5">Transaksi Berhasil</h1>
        <div className="flex justiy-between gap-5">
          <Link to="/home">
            <Button style="rounded-full text-white font-medium text-lg bg-black px-12 h-12 mt-5">
              Kembali Ke Home
            </Button>
          </Link>
          <Link to="/ulasan">
            <Button style="rounded-full text-white font-medium text-lg bg-black px-10 h-12 mt-5">
              Ulasan
            </Button>
          </Link>
        </div>
      </div>
    </PlainLayouts>
  );
};

// mengexport fungsi success
export default SuccessPage;
