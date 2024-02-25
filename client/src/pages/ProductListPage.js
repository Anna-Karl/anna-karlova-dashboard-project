import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import List from "../components/list/List";
import "./Page.scss";

export default function ProductList() {
  return (
    <section className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <main className="main">

          <h2 className="heading">All Products</h2>
          <div className="content">
              <List />
          </div>  

        </main>
      </div>
    </section>
  );
}
