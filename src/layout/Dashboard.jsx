import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
    return (
        <div>
             <Navbar/>
             <main>
                 <ToastContainer 
                 position='top-right'
                 autoClose={3000}
                 theme='dark'/>
                {
                    <Outlet/>
                }
             </main>
             <Footer/>

        </div>
    );
};

export default Dashboard;