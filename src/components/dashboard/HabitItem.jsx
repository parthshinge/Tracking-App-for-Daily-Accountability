import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';

const HabitItem = ({ habit, onToggle }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        glass-panel p-4 flex items-center justify-between group cursor-pointer border-l-4
        ${habit.completed ? 'border-l-green-500 bg-green-500/5' : 'border-l-transparent hover:bg-primary/5 hover:border-l-primary/30'}
      `}
            onClick={() => onToggle(habit.id)}
        >
            <div className="flex items-center gap-4">
                <div
                    className={`
            w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
            ${habit.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-500 group-hover:border-primary'}
          `}
                >
                    {habit.completed && (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Check size={14} className="text-white" strokeWidth={3} />
                        </motion.div>
                    )}
                </div>

                <div>
                    <h4 className={`font-medium transition-all ${habit.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                        {habit.title}
                    </h4>
                    <p className="text-xs text-gray-500">{habit.time}</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                    <Flame size={14} className={habit.streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-gray-600'} />
                    <span className="text-xs font-bold">{habit.streak}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default HabitItem;
