import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
             <Navbar/>
             <main>
                {
                    <Outlet/>
                }
             </main>
             <Footer/>

        </div>
    );
};

export default Dashboard;