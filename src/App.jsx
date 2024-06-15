import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage"
import LoginPage from "./pages/LoginPage"
import KodeVerifikasiPage from "./pages/KodeVerifikasiPage"
import RekomendasiMobilPage from "./pages/RekomendasiMobilPage"
import CatalogMobilPage from "./pages/CatalogMobilPage"
import PembayaranPage from "./pages/PembayaranPage"
import ConfirmPembayaranPage from "./pages/ConfirmPembayaranPage"
import SuccessPage from "./pages/SuccessPage"
import UlasanPage from "./pages/UlasanPage"
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/kode" element={<KodeVerifikasiPage/>} />
          <Route path="/home" element={<RekomendasiMobilPage/>} />
          <Route path="/catalog" element={<CatalogMobilPage/>} />
          <Route path="/bayar" element={<PembayaranPage/>} />
          <Route path="/confirm" element={<ConfirmPembayaranPage/>} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/ulasan" element={<UlasanPage/>} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App
