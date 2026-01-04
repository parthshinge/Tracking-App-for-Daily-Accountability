import React from 'react';
import { Target } from 'lucide-react';

const TopNav = () => {
    return (
        <header className="sticky top-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                    <div className="p-2 bg-gradient-to-br from-primary via-accent to-primary rounded-lg shadow-lg shadow-primary/20">
                        <Target size={22} className="text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white font-main">Goal Tracker</span>
                </div>
                {/* Optional user profile or settings could go here */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 ring-2 ring-transparent hover:ring-primary/50 transition-all cursor-pointer" />
            </div>
        </header>
    );
};

export default TopNav;
