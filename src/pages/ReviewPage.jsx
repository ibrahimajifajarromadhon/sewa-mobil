import { Link } from "react-router-dom";
import PlainLayouts from "../components/Layouts/PlainLayouts";
import Button from "../components/Elements/Button";

const reviews = [
  {
    id: 1,
    name: "Formo",
    image: "../src/assets/images/star.svg",
    rating: "440+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Van",
    kapasitas: "7 Person",
    steering: "Manual",
    tanki: "45 Liter",
  },
  {
    id: 2,
    name: "Susanto",
    image: "../src/assets/images/star.svg",
    rating: "300+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Mobil",
    kapasitas: "2 Person",
    steering: "Matic",
    tanki: "30 Liter",
  },
  {
    id: 3,
    name: "Budiyawan",
    image: "../src/assets/images/star.svg",
    rating: "100+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Van",
    kapasitas: "4 Person",
    steering: "Manual",
    tanki: "50 Liter",
  },
  {
    id: 4,
    name: "Ahmad Subagiyo",
    image: "../src/assets/images/star.svg",
    rating: "800+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Mobil",
    kapasitas: "3 Person",
    steering: "Manual",
    tanki: "30 Liter",
  },
  {
    id: 5,
    name: "Syrifudin",
    image: "../src/assets/images/star.svg",
    rating: "100+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Van",
    kapasitas: "4 Person",
    steering: "Manual",
    tanki: "50 Liter",
  },
  {
    id: 6,
    name: "Berliana",
    image: "../src/assets/images/star.svg",
    rating: "800+ Reviewer",
    keterangan:
      "Hadir dalam berbagai pilihan warna yaitu hitam atau putih yang simple dan modern namun memiliki performa mesin yang optimal.",
    type: "Mobil",
    kapasitas: "3 Person",
    steering: "Manual",
    tanki: "30 Liter",
  },
];

const ReviewPage = () => {
  return (
    <PlainLayouts style="my-10">
      <div className="flex flex-col items-center justify-center w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 w-full">
          {reviews.map((review) => (
            <div
              className="bg-gray-300 rounded-xl flex flex-col p-10 w-full shadow-lg border border-gray-200"
              key={review.id}
            >
              <h1 className="text-2xl font-extrabold">{review.name}</h1>
              <div className="flex items-center my-2">
                <img src={review.image} alt="" className="mr-2" />
                <p className="text-gray-600 font-medium text-sm">
                  {review.rating}
                </p>
              </div>
              <p className="my-5 text-gray-600">{review.keterangan}</p>
              <div className="w-full">
                <div className="flex gap-10">
                  <div className="w-1/2 flex justify-between mt-5">
                    <p className="text-gray-500 font-medium">Type Mobil</p>
                    <p className="text-gray-600 font-bold">{review.type}</p>
                  </div>
                  <div className="w-1/2 flex justify-between mt-5">
                    <p className="text-gray-500 font-medium">Kapasitas</p>
                    <p className="text-gray-600 font-bold">
                      {review.kapasitas}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex gap-10">
                    <div className="w-1/2 flex justify-between mt-5">
                      <p className="text-gray-500 font-medium">Steering</p>
                      <p className="text-gray-600 font-bold">
                        {review.steering}
                      </p>
                    </div>
                    <div className="w-1/2 flex justify-between mt-5">
                      <p className="text-gray-500 font-medium">Tanki</p>
                      <p className="text-gray-600 font-bold">{review.tanki}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/catalog">
          <Button style="rounded-full text-white font-medium text-lg bg-black px-14 h-12 mt-5">
            Kembali Ke Home
          </Button>
        </Link>
      </div>
    </PlainLayouts>
  );
};

export default ReviewPage;
