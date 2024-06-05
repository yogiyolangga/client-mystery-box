import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Prize from "./components/Prize";
import Logout from "./components/Logout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className='container mx-auto py-4 w-full'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/prize" element={<Prize/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
          <Footer />
      </div>

  );
}

export default App;
