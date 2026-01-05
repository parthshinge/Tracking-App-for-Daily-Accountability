import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2, Edit2 } from 'lucide-react';

const GoalCard = ({ goal, onToggle, onDelete, onEdit }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`
                card-base p-4 flex items-center gap-4 group cursor-pointer border border-white/5
                ${goal.completed ? 'bg-bg-card/50 opacity-60' : 'bg-bg-card hover:bg-bg-card/80 hover:border-primary/20'}
            `}
        >
            {/* Checkbox */}
            <button
                onClick={() => onToggle(goal.id)}
                className={`
                    flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${goal.completed
                        ? 'bg-gradient-to-br from-success to-emerald-600 border-transparent shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                        : 'border-white/20 hover:border-primary bg-white/5'}
                `}
            >
                {goal.completed && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Check size={14} className="text-white" strokeWidth={3} />
                    </motion.div>
                )}
            </button>

            {/* Content */}
            <div className="flex-1 min-w-0" onClick={() => onToggle(goal.id)}>
                <h3 className={`font-medium truncate transition-all ${goal.completed ? 'text-text-muted line-through decoration-gray-600' : 'text-text-main'
                    }`}>
                    {goal.text}
                </h3>
            </div>

            {/* Actions */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Edit functionality handling omitted for brevity if not strictly requested, but UI is here */}
                {/* <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Edit2 size={16} />
                </button> */}
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(goal.id); }}
                    className="p-2 text-text-muted hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default GoalCard;
