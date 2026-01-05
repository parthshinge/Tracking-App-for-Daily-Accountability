import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-bg-main text-text-main font-sans selection:bg-primary/30 selection:text-white">
            <Sidebar />

            <div className="flex-1 flex flex-col md:ml-[280px] min-h-screen transition-all duration-300">
                <TopNav />
                <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full pb-24 md:pb-8">
                    <Outlet />
                </main>
            </div>
            <MobileNav />
        </div>
    );
};

export default Layout;
