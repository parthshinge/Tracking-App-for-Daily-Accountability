import React from 'react';
import { Trophy, CheckCircle2, Circle } from 'lucide-react';

const StatsBar = ({ total, completed }) => {
    const remaining = total - completed;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-4 md:px-0">
            <div className="card-base p-4 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-500 font-medium mb-1">Total Goals</span>
                <div className="flex items-center gap-2 text-primary">
                    <Trophy size={20} />
                    <span className="text-2xl font-bold">{total}</span>
                </div>
            </div>

            <div className="card-base p-4 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-500 font-medium mb-1">Completed</span>
                <div className="flex items-center gap-2 text-success">
                    <CheckCircle2 size={20} />
                    <span className="text-2xl font-bold">{completed}</span>
                </div>
            </div>

            <div className="card-base p-4 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-500 font-medium mb-1">Remaining</span>
                <div className="flex items-center gap-2 text-orange-500">
                    <Circle size={20} />
                    <span className="text-2xl font-bold">{remaining}</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
