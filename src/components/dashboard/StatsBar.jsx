import React from 'react';
import { Trophy, CheckCircle2, Circle } from 'lucide-react';

const StatsBar = ({ total, completed }) => {
    const remaining = total - completed;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-0">
            <div className="card-base p-6 flex flex-col items-start justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Trophy size={48} className="text-primary" />
                </div>
                <span className="text-sm text-text-muted font-medium mb-1">Total Goals</span>
                <span className="text-3xl font-bold text-white">{total}</span>
            </div>

            <div className="card-base p-6 flex flex-col items-start justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <span className="text-sm text-text-muted font-medium mb-1">Completed</span>
                <span className="text-3xl font-bold text-white">{completed}</span>
            </div>

            <div className="card-base p-6 flex flex-col items-start justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Circle size={48} className="text-orange-400" />
                </div>
                <span className="text-sm text-text-muted font-medium mb-1">Pending</span>
                <span className="text-3xl font-bold text-white">{remaining}</span>
            </div>
        </div>
    );
};

export default StatsBar;
