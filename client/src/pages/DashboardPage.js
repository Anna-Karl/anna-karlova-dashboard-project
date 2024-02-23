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
    
              <h1 className="text-3xl font-bold underline">Dashboard!</h1>
              
            </main>
          </div>
        </section>
      );
    }
    