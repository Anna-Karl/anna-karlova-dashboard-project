import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./List.scss";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchedProducts = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/api/products`);
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedProducts();
  }, []);

  return (
    <section className="wrapper-list">
      {products.map((item) => (
        <div key={item.product_id} className="listitem">
          <Link to={`/products/${item.product_id}`}>
            <div className="poster">
              <img src={item.picture} alt={item.product_name} />
            </div>
            <div className="title">{item.product_name}</div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
