import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const Layout = () => {
    return (
        <div className="app-container font-main text-white bg-primary min-h-screen">
            <Sidebar />
            <main className="main-content flex-1 relative z-10">
                {/* Background Gradients/Orbs */}
                <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-20">
                    <Outlet />
                </div>
            </main>
            <MobileNav />
        </div>
    );
};

export default Layout;
