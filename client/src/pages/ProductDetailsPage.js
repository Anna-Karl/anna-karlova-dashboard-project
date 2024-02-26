import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Product from "../components/product/Product";
import "./Page.scss";

export default function ProductDetails() {
  
  return (
    <section className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <main className="main">

          <h2 className="heading">About Product</h2>
          <div className="content">
            <Product />
          </div>
          
        </main>
      </div>
    </section>
  );
}
