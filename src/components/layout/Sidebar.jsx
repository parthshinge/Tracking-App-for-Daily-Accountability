import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, Sparkles, PieChart, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: CheckCircle2, label: 'Habits', path: '/habits' },
    { icon: Sparkles, label: 'AI Coach', path: '/coach' },
    { icon: PieChart, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <motion.aside
      initial={{ x: -260 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-[280px] bg-bg-main border-r border-white/5 flex flex-col z-50 hidden md:flex"
    >
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-bold font-sans flex items-center gap-2 text-white tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          NorthStar
        </h1>
        <p className="text-xs text-text-muted mt-2 ml-1">Daily Accountability</p>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group
                ${isActive
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 font-semibold'
                  : 'text-text-secondary hover:text-white hover:bg-white/5'}
              `}
            >
              <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:text-white transition-colors text-text-muted'} />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 space-y-1">
        <button className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white transition-colors w-full text-left rounded-xl hover:bg-white/5">
          <Settings size={20} />
          <span className="font-medium text-sm">Settings</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-red-400 transition-colors w-full text-left rounded-xl hover:bg-white/5">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
