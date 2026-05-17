import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";
import AboutPage from "./pages/About";
import ReservationPage from "./pages/Reservation";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />      {/* ← ubah dari "/home" menjadi "/" */}
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* route lain nanti */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;