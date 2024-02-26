import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import "./Product.scss";
import { Link } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const MAX_PRODUCT_ID = 9;

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

  const getNextProductId = () => {
    let nextId = parseInt(productId, 10) + 1;
    if (nextId > MAX_PRODUCT_ID) {
      nextId = 1;
    }
    return nextId;
  };

  const nextProductId = getNextProductId();
  const nextProductUrl = `/products/${nextProductId}`;

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
                          <AiOutlineUser />
                          <p>{comment.user_name}</p>
                        </div>
                        <div className="rating">{comment.rating}</div>
                      </div>
                      <div className="comment">{comment.comment}</div>
                  </div>
                ))}
          </div>

          {nextProductId <= MAX_PRODUCT_ID ? (
            <div className="next">
              <h2 className="heading-review">Next Product</h2>
              <Link to={nextProductUrl}> 
              <AiOutlineArrowRight />
              </Link>
            </div>
          ) : null}

        </div>
      ) : (
        <p>Loading product details</p>
      )}
    </section>
  );
};

export default ProductDescription;
