import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/Product/ProductDetails";
import ProductListing from "./components/Product/ProductListing";
import Footer from "./components/SharedPage/Footer";
import Navbar from "./components/SharedPage/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
