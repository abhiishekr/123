import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetProduct from "./components/GetProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetSingleProduct from "./components/GetSingleProduct";
import AddProduct from "./components/AddProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<GetProduct />} />
          <Route path="/product" element={<GetSingleProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
