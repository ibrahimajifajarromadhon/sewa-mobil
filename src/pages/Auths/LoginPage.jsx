import { Link } from "react-router-dom";
import Button from "../../components/Elements/Button";
import NormalLayouts from "../../components/Layouts/NormalLayouts";

const LoginPage = () => {
  return (
    <NormalLayouts>
      <div className="bg w-full h-96 flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="Login menggunakan email atau no hp"
          className="text-lg bg-gray-500 text-white rounded-xl p-3 w-2/5"
        />
        <Link to="/kode">
          <Button style="rounded-full text-lg bg-black w-36 h-12 my-5 font-bold text-white">
            Masuk
          </Button>
        </Link>
      </div>
    </NormalLayouts>
  );
};

export default LoginPage;
