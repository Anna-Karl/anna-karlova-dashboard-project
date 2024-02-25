import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import "./Product.scss";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProductDescription = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      fetchedSelectedProduct();
    }
    async function fetchedSelectedProduct() {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/api/products/${productId}`
        );
        const productData = response.data;
        setSelectedProduct(productData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [productId]);

  const [productComments, setProductComments] = useState([]);

  useEffect(() => {
    if (productId) {
      fetchProductComments();
    }
    async function fetchProductComments() {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/api/products/${productId}/reviews`
        );
        const commentsData = response.data;
        setProductComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [productId]);

  return (
    <section className="wrapper-product">
      {selectedProduct ? (
        <div key={selectedProduct.product_id}>
          <div className="poster">
            <img className="image"
              src={selectedProduct.picture}
              alt={selectedProduct.product_name}/>
            <div className="detail">
              <h1 className="title">{selectedProduct.product_name}</h1>
              <div className="ingredients">{selectedProduct.ingredients}</div>
              <div className="description">{selectedProduct.description}</div>
            </div>
          </div>

          <div className="comments">
            <h2 className="heading-review">Customer reviews</h2>
                {productComments.map((comment) => (
                  <div key={comment.review_id} className="comment-item">
                      <div className="customer">
                        <div className="user"> 
                          <FaRegUserCircle />
                          <p>{comment.user_name}</p>
                        </div>
                        <div className="rating">{comment.rating}</div>
                      </div>
                      <div className="comment">{comment.comment}</div>
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <p>Loading product details</p>
      )}
    </section>
  );
};

export default ProductDescription;
