import React, { useState, useEffect } from "react";
import "./styles/products.css";
import { GetCall } from "../../Backend/API/APICalls";
import { useNavigate } from "react-router-dom";

function GetProduct() {
  useEffect(() => {
    GetProducts();
  }, []);

  const navigateTo = useNavigate();

  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    const products = await GetCall();
    setProducts(products);
  };
  const GotoSingleProd = (id) => {
    return navigateTo("/product", { state: { id: id } });
  };

  return (
    <div className="Product-container">
      {products.map((product) => {
        return (
          <div
            onClick={() => {
              GotoSingleProd(product.id);
            }}
            key={product.id}
            className="cart"
          >
            {" "}
            <div>
              <img src={product.image} width="250px" alt="#" />
            </div>
            <div className="product-description">
              <p className="product-title">{product.title}</p>
              <p className="product-price">
                {`$${product.price}`}</p>
              <p className="product-des" >
                {`Description: ${product.description}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GetProduct;
