import React from "react";
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import './Page.scss';


export default function NotFound() {
    return (
        <section className="wrapper">
          <Sidebar />
          <div className="content">
            <Header />
            <main className="main">
    
              <h2 className="text-3xl font-bold underline">Page Not Found</h2>
              
            </main>
          </div>
        </section>
      );
    }
    