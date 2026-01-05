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
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-bg-main/90 backdrop-blur-xl border-t border-white/5 md:hidden flex items-center justify-around px-4 z-50 pb-2">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${isActive
                        ? 'text-white bg-white/5 -translate-y-1'
                        : 'text-text-muted hover:text-white'
                        }`}
                >
                    <item.icon size={24} className={isActive ? 'text-accent-purple' : ''} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default MobileNav;
