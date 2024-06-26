// mengimpor modul-modul yang diperlukan
import { Link } from "react-router-dom";
import Button from "../../components/Elements/Button";
import NormalLayouts from "../../components/Layouts/NormalLayouts";

// sebuah arrow function untuk mengatur halaman start
const StartPage = () => {
  return (
    <NormalLayouts>
      <div className="bg w-full h-96 flex justify-center">
        <Link to="/login">
          <Button style="rounded-full bg-black text-2xl w-36 h-12 my-28 font-bold text-white">
            Start
          </Button>
        </Link>
      </div>
    </NormalLayouts>
  );
};

// mengexport fungsi start
export default StartPage;
