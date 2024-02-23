import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./List.scss";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const List = () => {
  const [products, seProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const fetchedProducts = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_SERVER_URL}/api/products`
      );
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
     


    </section>
  );
};

export default List;