import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Auths/StartPage";
import LoginPage from "./pages/Auths/LoginPage";
import KodeVerifikasiPage from "./pages/Auths/KodeVerifikasiPage";
import RecommendCarPage from "./pages/Cars/RecomendCarPage";
import CatalogCarPage from "./pages/Cars/CatalogCarPage";
import PayPage from "./pages/Pays/PayPage";
import ConfirmPayPage from "./pages/Pays/ConfirmPayPage";
import SuccessPage from "./pages/Pays/SuccessPage";
import ReviewPage from "./pages/Cars/ReviewPage";
import HomePage from "./pages/Auths/HomePage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/kode" element={<KodeVerifikasiPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rekomendasi" element={<RecommendCarPage />} />
          <Route path="/catalog" element={<CatalogCarPage />} />
          <Route path="/bayar" element={<PayPage />} />
          <Route path="/confirm" element={<ConfirmPayPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/ulasan" element={<ReviewPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
