import React from 'react';
import { Trophy, CheckCircle2, Circle } from 'lucide-react';

const StatsBar = ({ total, completed }) => {
    const remaining = total - completed;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 px-4 md:px-0">
            <div className="card-gradient p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm text-text-muted font-medium mb-2 uppercase tracking-wider">Total Goals</span>
                <div className="flex items-center gap-2 text-white/90 z-10">
                    <Trophy size={20} className="text-primary" />
                    <span className="text-3xl font-bold font-main">{total}</span>
                </div>
            </div>

            <div className="card-gradient p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm text-text-muted font-medium mb-2 uppercase tracking-wider">Completed</span>
                <div className="flex items-center gap-2 text-white/90 z-10">
                    <CheckCircle2 size={20} className="text-success" />
                    <span className="text-3xl font-bold font-main">{completed}</span>
                </div>
            </div>

            <div className="card-gradient p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm text-text-muted font-medium mb-2 uppercase tracking-wider">Remaining</span>
                <div className="flex items-center gap-2 text-white/90 z-10">
                    <Circle size={20} className="text-orange-400" />
                    <span className="text-3xl font-bold font-main">{remaining}</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
