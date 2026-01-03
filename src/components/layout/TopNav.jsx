import React from 'react';
import { Target } from 'lucide-react';

const TopNav = () => {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Target size={24} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-900">Goal Tracker</span>
                </div>
                {/* Optional user profile or settings could go here */}
                <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
        </header>
    );
};

export default TopNav;
