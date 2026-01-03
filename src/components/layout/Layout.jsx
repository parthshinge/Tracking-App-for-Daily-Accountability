import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';

const Layout = () => {
    return (
        <div className="min-h-screen bg-bg-main text-text-main font-main">
            <TopNav />
            <main className="max-w-4xl mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
