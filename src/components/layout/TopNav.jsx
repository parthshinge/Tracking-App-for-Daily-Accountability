import React from 'react';

const TopNav = () => {
    return (
        <header className="sticky top-0 z-40 bg-bg-main/80 backdrop-blur-xl border-b border-white/5 w-full">
            <div className="px-8 h-20 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">Dashboard</h2>
                    <p className="text-sm text-text-muted">Welcome back, Parth</p>
                </div>

                {/* Right side actions */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 ring-2 ring-transparent hover:ring-primary/50 transition-all cursor-pointer flex items-center justify-center text-xs font-semibold text-white">
                        PS
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
