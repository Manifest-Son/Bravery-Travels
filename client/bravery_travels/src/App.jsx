import "./App.css";
import Logingin from "./pages/Start/Logingin";
import Signup from "./pages/Start/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footers";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Price from "./pages/Pricing/Price.jsx";
import ProfilePage from "./pages/Profile/Profile.jsx";
import CarHires from "./pages/Car Hire/CarHires";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carhires" element={<CarHires />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Logingin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
