import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import NormalLayouts from "../components/Layouts/NormalLayouts";

const cars = [
  {
    id: 1,
    name: "All New Avanza",
    merk: "Toyota",
    image: "../../src/assets/images/avanza.svg",
  },
  {
    id: 2,
    name: "All New Terios",
    merk: "Daihatsu",
    image: "../../src/assets/images/terios.svg",
  },
  {
    id: 3,
    name: "Brio",
    merk: "Honda",
    image: "../../src/assets/images/brio.svg",
  },
];

const RecommendCarPage = () => {
  return (
    <NormalLayouts style="mt-64">
      <div className="bg w-full h-96 flex flex-col items-center">
        <h1 className="text-3xl font-black mb-3">Rekomendasi mobil:</h1>
        <p className="font-light text-sm">
          Kami menyiapkan beberapa rekomendasi mobil untuk anda
        </p>
        <div className="flex my-5">
          <div className="flex justify-center mx-3 gap-10">
            {cars.map((car) => (
              <div className="bg-gray-400 rounded-2xl flex flex-col items-center justify-center pb-5" key={car.id}>
                <div className="bg-white rounded-2xl px-5">
                  <img
                    src={car.image}
                    alt=""
                    className="h-64 w-64"
                  />
                </div>
                <h1 className="font-bold text-xl mt-3 mb-2">{car.name}</h1>
                <p className="text-gray-700 font-bold text-md">{car.merk}</p>
              </div>
            ))}
          </div>
        </div>
        <Link to="/catalog">
          <Button style="bg-black px-10 h-12 my-5 rounded-full font-medium text-white">
            Lihat mobil lainnya
          </Button>
        </Link>
      </div>
    </NormalLayouts>
  );
};

export default RecommendCarPage;