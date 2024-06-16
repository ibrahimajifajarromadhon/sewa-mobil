import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import NormalLayouts from "../components/Layouts/NormalLayouts";

const channels = [
  {
    id: 1,
    alur: "Pilih Lokasi",
    image: "../src/assets/images/lokasi-icon.svg",
    deskripsi: "Masukkan lokasi penjemputan dan drop terlebih dahulu ya.",
  },
  {
    id: 2,
    alur: "Tanggal Pemesanan",
    image: "../src/assets/images/tgl-icon.svg",
    deskripsi: "Jangan lupa tentukan tanggal dan hari juga ya cuy. Jangan ada yang salah.",
  },
  {
    id: 3,
    alur: "Pilih Mobil",
    image: "../src/assets/images/mobil-icon.svg",
    deskripsi: "Pilih mobil kesukaanmu untuk menemani perjalananmu yang luar biasa.",
  }
]

const HomePage = () => {
  return (
    <NormalLayouts style="mt-96">
      <div className="bg w-full h-96 flex flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Cara Kerja</h1>
          <p className="text-md font-medium my-3">
            Berikut adalah cara kerja pada sistem web kami.
          </p>
        </div>

        <div className="relative flex justify-between gap-48 px-10 py-5">
          {channels.map((channel) => (
            <div className="w-full p-5 text-center" key={channel.id}>
            <div className="flex justify-center my-5">
              <img
                src={channel.image}
                alt=""
                className="w-10"
              />
            </div>
            <h1 className="font-bold text-xl mb-5">{channel.alur}</h1>
            <p className="font-medium text-sm">
              {channel.deskripsi}
            </p>
          </div>
          ))}
          <svg
            className="absolute h-24 left-1/3 transform -translate-x-1/2"
            width="27%"
            viewBox="0 0 100 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0 16 C 20 0, 40 0, 50 16 S 80 32, 100 16"
              stroke="#B0BEC5"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          <svg
            className="absolute h-24 left-2/3 transform -translate-x-1/2"
            width="27%"
            viewBox="0 0 100 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0 16 C 20 0, 40 0, 50 16 S 80 32, 100 16"
              stroke="#B0BEC5"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="text-center px-10">
          <h1 className="text-4xl font-bold mt-10">Sewa Mobil Murah</h1>
          <p className="text-md font-medium my-3 px-20">
            Sewa Mobil Murah adalah merupakan sebuah perusahaan yang bergerak di
            bidang penyewaan mobil untuk berbagai keperluan. Kami menyediakan
            berbagai jenis mobil yang berkualitas dan terawat dengan baik untuk
            memenuhi kebutuhan perjalanan dan transportasi Anda. Dengan
            pengalaman kami yang luas dalam industri ini, kami bertujuan untuk
            memberikan layanan rental mobil yang cepat, mudah, dan terpercaya
            kepada pelanggan kami.
          </p>
          <Link to="/rekomendasi">
            <Button style="rounded-full bg-black w-36 h-12 my-3 font-bold text-white">
              Lanjutkan
            </Button>
          </Link>
        </div>
      </div>
    </NormalLayouts>
  );
};

export default HomePage;
