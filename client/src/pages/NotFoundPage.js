import React from "react";
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom";
import './Page.scss';


export default function NotFound() {
    return (
        <section className="wrapper">
          <Sidebar />
          <div className="content">
            <Header />
            <main className="main-notfound">
              <div className="return">
              <Link to="/">
                <AiOutlineArrowLeft />
              </Link>
              <h2 className="heading">Page Not Found</h2>
              </div>
            </main>
          </div>
        </section>
      );
    }
    