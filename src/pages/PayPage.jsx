import { Link } from "react-router-dom";
import PayLayouts from "../components/Layouts/PayLayouts";
import Button from "../components/Elements/Button";

const PayPage = () => {
  return (
    <PayLayouts style="mb-96" style1="mt-96">
      <Link to="/catalog">
        <Button style="rounded-full bg-white w-36 h-12 my-5 text-black font-bold">
          Kembali
        </Button>
      </Link>
      <div className="flex w-full mb-96">
        <div className="w-4/6 h-52">
          <div className="w-full bg-white rounded-lg p-5">
            <h1 className="text-xl font-extrabold">Billing Info</h1>
            <div className="flex justify-between text-gray-400 font-medium text-sm mb-5">
              <p>Masukkan data anda</p>

              <p>Step 1 of 4</p>
            </div>
            <div className="flex my-5">
              <div className="w-1/2 pr-5">
                <label htmlFor="">Nama</label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">No Hp</label>
                <input
                  type="text"
                  placeholder="No Hp"
                  className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-5">
                <label htmlFor="">Alamat</label>
                <input
                  type="text"
                  placeholder="Alamat"
                  className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Kota</label>
                <input
                  type="text"
                  placeholder="Kota"
                  className="h-12 w-full p-5 my-2 bg-blue-300 rounded-lg border border-blue-300"
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg my-5 p-5">
            <h1 className="text-xl font-extrabold">Data Rental</h1>
            <div className="flex justify-between text-gray-400 font-medium text-sm mb-5">
              <p>Pilih tanggak rental anda</p>

              <p>Step 2 of 4</p>
            </div>
            <div className="flex items-center font-bold my-5">
              <input type="radio" placeholder="Nama" className="h-5 w-5 mr-2" />
              Penjemputan
            </div>
            <div className="flex justify-start">
              <div className="w-1/2 mr-5">
                <label htmlFor="" className="font-bold">
                  Lokasi
                </label>
                <select
                  type="text"
                  placeholder="Nama"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Kota</option>
                  <option value="1">Jogja</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="font-bold">
                  Tanggal
                </label>
                <select
                  type="text"
                  placeholder="Tanggal"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Tanggal</option>
                  <option value="1">Senin</option>
                </select>
              </div>
            </div>
            <div className="flex my-5">
              <div className="w-1/2">
                <label htmlFor="" className="font-bold">
                  Jam
                </label>
                <select
                  type="text"
                  placeholder="Jam"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Jam</option>
                  <option value="1">00.00</option>
                </select>
              </div>
            </div>
            <div className="flex items-center font-bold my-5">
              <input type="radio" placeholder="Nama" className="h-5 w-5 mr-2" />
              Drop - Off
            </div>
            <div className="flex justify-start">
              <div className="w-1/2 mr-5">
                <label htmlFor="" className="font-bold">
                  Lokasi
                </label>
                <select
                  type="text"
                  placeholder="Nama"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Kota</option>
                  <option value="1">Jogja</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="font-bold">
                  Tanggal
                </label>
                <select
                  type="text"
                  placeholder="Tanggal"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Tanggal</option>
                  <option value="1">Senin</option>
                </select>
              </div>
            </div>
            <div className="flex my-5">
              <div className="w-1/2">
                <label htmlFor="" className="font-bold">
                  Jam
                </label>
                <select
                  type="text"
                  placeholder="Jam"
                  className="h-12 w-full my-2 p-2 bg-blue-300 rounded-lg border border-blue-300"
                >
                  <option selected>Pilih Jam</option>
                  <option value="1">00.00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-5">
            <h1 className="text-xl font-extrabold">Metode Pembayaran</h1>
            <div className="flex justify-between text-gray-400 font-medium text-sm mb-5">
              <p>Pilih metode pembayaran anda</p>

              <p>Step 3 of 4</p>
            </div>
            <div className="flex justify-between my-5 bg-blue-300 rounded-lg w-full h-12">
              <div className="flex items-center font-bold my-5">
                <input type="checkbox" className="h-5 w-5 mr-2 ml-3" />
                Bank BNI
              </div>
              <img
                src="../src/assets/images/bni.svg"
                alt=""
                className="w-12 mr-3"
              />
            </div>
            <div className="flex justify-between my-5 bg-blue-300 rounded-lg w-full h-12">
              <div className="flex items-center font-bold my-5">
                <input type="checkbox" className="h-5 w-5 mr-2 ml-3" />
                Bank BRI
              </div>
              <img
                src="../src/assets/images/bri.svg"
                alt=""
                className="w-12 mr-3"
              />
            </div>
            <div className="flex justify-between my-5 bg-blue-300 rounded-lg w-full h-12">
              <div className="flex items-center font-bold my-5">
                <input type="checkbox" className="h-5 w-5 mr-2 ml-3" />
                Bank Mandiri
              </div>
              <img
                src="../src/assets/images/mandiri.svg"
                alt=""
                className="w-12 mr-3"
              />
            </div>
          </div>
          <div className="w-full bg-white rounded-lg mt-5 p-5">
            <h1 className="text-xl font-extrabold">Confirmation</h1>
            <div className="flex justify-between text-gray-400 font-medium text-sm mb-5">
              <p>
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
              <p>Step 4 of 4</p>
            </div>
            <div className="flex my-5 bg-blue-300 rounded-lg w-full h-12 text-gray-600 text-sm">
              <div className="flex items-center font-medium my-5">
                <input type="checkbox" className="h-5 w-5 mr-2 ml-3" />I agree
                with sending an Marketing and newsletter emails. No spam,
                promissed!
              </div>
            </div>
            <div className="flex my-5 bg-blue-300 rounded-lg w-full h-12 text-gray-600 text-sm">
              <div className="flex items-center font-medium my-5">
                <input type="checkbox" className="h-5 w-5 mr-2 ml-3" />I agree
                with our terms and conditions and privacy policy.
              </div>
            </div>
            <Button style="px-5 py-3 bg-blue-300 rounded-md text-white font-medium">
              Rent Now
            </Button>
            <img src="../src/assets/images/saver.svg" alt="" className="my-5" />
            <h1 className="text-md font-bold">All your data are safe</h1>
            <div className="text-gray-400 font-medium text-sm">
              <p>
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-2/6 p-5 ml-5">
          <h1 className="text-xl font-extrabold">Rental Detail</h1>
          <p className="text-gray-400 font-medium text-sm mb-5">
            Harga bisa berubah ubah sesuai ketentuan.
          </p>
          <div className="flex items-center my-10 gap-2">
            <img src="../src/assets/images/hero.svg" alt="" className="w-32" />
            <div>
              <h1 className="text-xl font-extrabold">All New Avanza</h1>
              <p className="text-gray-400 font-medium text-sm mb-5">Toyota</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between my-5">
            <p className="text-gray-400 font-medium">Sub Total</p>
            <p className="font-bold">Rp. 350.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400 font-medium">Tax</p>
            <p className="font-bold">Rp. 0</p>
          </div>
          <div className="flex items-center mt-5">
            <input
              type="text"
              className="w-full h-12 p-5 border border-blue-300 rounded-l-md bg-blue-300"
              placeholder="Masukkan Kode Promo"
            />
            <Button style="bg-blue-300 w-52 h-12 border border-gray-300 border-l-0 rounded-r-md font-bold text-md">
              Apply Now
            </Button>
          </div>
          <div className="flex justify-between items-center my-5">
            <div>
              <p className="font-bold">Total Harga</p>
              <p className="text-gray-400 font-medium text-sm">
                Harga sudah termasuk diskon
              </p>
            </div>
            <p className="font-bold text-xl">Rp. 350.000</p>
          </div>
          <Link to="/confirm">
            <Button style="bg-gray-600 w-full h-12 rounded-md mt-10 font-bold text-white">
              Lanjutkan
            </Button>
          </Link>
        </div>
      </div>
    </PayLayouts>
  );
};

export default PayPage;
