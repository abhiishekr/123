import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetProduct from "./components/GetProduct/GetProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetSingleProduct from "./components/GetSingleProduct/GetSingleProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<GetProduct />} />
          <Route path="/product" element={<GetSingleProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/UpdateProduct" element={<UpdateProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
