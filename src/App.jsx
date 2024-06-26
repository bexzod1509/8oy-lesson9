import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} setDark={setDark} />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
