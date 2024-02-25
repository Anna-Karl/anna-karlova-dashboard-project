import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Reviews from "../components/reviews/Reviews";
import "./Page.scss";

export default function ReviewsList() {
  return (
    <section className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <main className="main">

          <h2 className="heading">Review List</h2>
          <div className="content">
            <Reviews />
          </div>

        </main>
      </div>
    </section>
  );
}
