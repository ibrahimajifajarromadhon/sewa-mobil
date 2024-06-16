import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import KodeVerifikasiPage from "./pages/KodeVerifikasiPage";
import RecommendCarPage from "./pages/RecomendCarPage";
import CatalogCarPage from "./pages/CatalogCarPage";
import PayPage from "./pages/PayPage";
import ConfirmPayPage from "./pages/ConfirmPayPage";
import SuccessPage from "./pages/SuccessPage";
import ReviewPage from "./pages/ReviewPage";
import HomePage from "./pages/HomePage";
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
