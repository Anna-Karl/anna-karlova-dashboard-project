import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Reviews.scss";
import formatDate from "../utils/date";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  const fetchedReviews = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/api/reviews`);
      const reviewData = response.data;
      setReviews(reviewData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedReviews();
  }, []);

  return (
    <section className="wrapper-review">
      <table>
        <tbody>
          {reviews.map((item) => (
            <tr key={item.review_id} className="table-item">
              <td className="info">
                <Link className="" to={`/products/${item.product_id}`}>
                  <img src={item.picture} alt="product img" />
                </Link>
              </td>
              <td className="comment">{item.comment}</td>
              <td className="date">{formatDate(item.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Reviews;
