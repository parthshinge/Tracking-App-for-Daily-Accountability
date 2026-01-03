import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, Sparkles, PieChart } from 'lucide-react';

const MobileNav = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Home', path: '/' },
        { icon: CheckCircle2, label: 'Habits', path: '/habits' },
        { icon: Sparkles, label: 'Coach', path: '/coach' },
        { icon: PieChart, label: 'Stats', path: '/analytics' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#030712] border-t border-white/10 md:hidden flex items-center justify-around px-4 z-50 glass-panel" style={{ borderRadius: 0 }}>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive ? 'text-primary' : 'text-gray-500'
                        }`}
                >
                    <item.icon size={20} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default MobileNav;
