import React from "react";
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import './Page.scss';


export default function Dashboard() {
    return (
        <section className="wrapper">
          <Sidebar />
          <div className="content">
            <Header />
            <main className="main">
    
              <h2 className="text-3xl font-bold underline">Dashboard!</h2>
              
            </main>
          </div>
        </section>
      );
    }
    