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
      className="fixed left-0 top-0 h-screen w-[260px] glass-panel border-r border-gray-800 flex flex-col z-50 hidden md:flex"
      style={{ borderRadius: '0' }} // Override panel radius for sidebar
    >
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-bold font-main flex items-center gap-2">
          <span className="accent-gradient-text">NorthStar</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1 opacity-60">Daily Accountability</p>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative group
                ${isActive ? 'text-white bg-gradient-to-r from-primary/20 to-primary/5 border-l-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              <item.icon size={20} className={isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'} />
              <span className="font-medium text-sm">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full text-left rounded-lg hover:bg-white/5">
          <Settings size={20} />
          <span className="font-medium text-sm">Settings</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors w-full text-left rounded-lg hover:bg-white/5">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
