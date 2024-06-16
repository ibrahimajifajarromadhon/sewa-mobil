import { Link } from "react-router-dom";
import CardMobil from "../components/Fragments/CardMobil";
import Button from "../components/Elements/Button";
import NormalLayouts from "../components/Layouts/NormalLayouts";

const cars = [
  {
    id: 1,
    name: "Toyota Avanza",
    merk: "Toyota",
    long: "day",
    image: "../../src/assets/images/avanza.svg",
    price: "Rp. 450.000",
  },
  {
    id: 2,
    name: "New Ertiga",
    merk: "Suzuki",
    long: "day",
    image: "../../src/assets/images/ertiga.svg",
    price: "Rp. 250.000",
  },
  {
    id: 3,
    name: "Innova 2.0",
    merk: "Toyota",
    long: "month",
    image: "../../src/assets/images/innova-2.0.svg",
    price: "Rp. 350.000",
  },
  {
    id: 4,
    name: "Innova 2.5",
    merk: "Toyota",
    long: "month",
    image: "../../src/assets/images/innova-2.5.svg",
    price: "Rp. 400.000",
  },
  {
    id: 5,
    name: "All New Rush",
    merk: "Toyota",
    long: "day",
    image: "../../src/assets/images/rush.svg",
    price: "Rp. 500.000",
  },
  {
    id: 6,
    name: "CR - V",
    merk: "Honda",
    long: "day",
    image: "../../src/assets/images/crv.svg",
    price: "Rp. 430.000",
  },
  {
    id: 7,
    name: "All New Terios",
    merk: "Daihatsu",
    long: "day",
    image: "../../src/assets/images/terios.svg",
    price: "Rp. 400.000",
  },
  {
    id: 8,
    name: "Brio",
    merk: "Honda",
    long: "day",
    image: "../../src/assets/images/brio.svg",
    price: "Rp. 300.000",
  },
];

const CatalogCarPage = () => {
  return (
    <NormalLayouts>
      <div className="bg w-full flex flex-col px-10">
        <h1 className="text-3xl font-bold mb-3 pt-5">Daftar Mobil</h1>
        <div className="grid grid-cols-4 gap-10 my-5">
          {cars.map((car) => (
            <CardMobil key={car.id}>
              <CardMobil.Header name={car.name} merk={car.merk} />
              <CardMobil.Body images={car.image} />
              <CardMobil.Footer price={car.price} long={car.long} />
            </CardMobil>
          ))}
        </div>
        <div className="flex justify-between">
          <Link to="/rekomendasi">
            <Button style="rounded-full bg-black w-36 h-12 my-5 font-medium text-white">
              Kembali
            </Button>
          </Link>
          <Link to="/ulasan">
            <Button style="rounded-full bg-black w-36 h-12 my-5 font-medium text-white">Ulasan</Button>
          </Link>
        </div>
      </div>
    </NormalLayouts>
  );
};

export default CatalogCarPage;
