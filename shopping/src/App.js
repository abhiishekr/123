import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetProduct from "./components/GetProduct/GetProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetSingleProduct from "./components/GetSingleProduct/GetSingleProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Login from "./components/LoginRegister/Login/Login";
import Register from "./components/LoginRegister/Register/Register"

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
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
