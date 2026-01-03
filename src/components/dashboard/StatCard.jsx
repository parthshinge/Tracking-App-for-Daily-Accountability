import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, trend, color = "primary" }) => {
    const colorClasses = {
        primary: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        accent: "text-pink-400 bg-pink-500/10 border-pink-500/20",
        success: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        warning: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-6 flex flex-col justify-between h-[160px] relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 p-4 opacity-50 transition-opacity group-hover:opacity-100`}>
                <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                    <Icon size={24} />
                </div>
            </div>

            <div>
                <p className="text-sm text-gray-400 font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
            </div>

            {trend && (
                <div className="flex items-center gap-2 mt-4 text-xs font-medium">
                    <span className={`${trend >= 0 ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1`}>
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                    <span className="text-gray-500">vs last week</span>
                </div>
            )}
        </motion.div>
    );
};

export default StatCard;
