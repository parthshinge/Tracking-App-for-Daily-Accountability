import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';
import StatsBar from '../components/dashboard/StatsBar';
import GoalCard from '../components/dashboard/GoalCard';

const Dashboard = () => {
    // State
    const [goals, setGoals] = useState(() => {
        const saved = localStorage.getItem('goals');
        return saved ? JSON.parse(saved) : [];
    });
    const [inputText, setInputText] = useState('');

    // Persistence
    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);

    // Handlers
    const addGoal = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newGoal = {
            id: uuidv4(),
            text: inputText.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        setGoals([newGoal, ...goals]);
        setInputText('');
    };

    const toggleGoal = (id) => {
        setGoals(goals.map(g =>
            g.id === id ? { ...g, completed: !g.completed } : g
        ));
    };

    const deleteGoal = (id) => {
        setGoals(goals.filter(g => g.id !== id));
    };

    // Derived State
    const completedCount = goals.filter(g => g.completed).length;

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
                    Track Your Goals & Habits
                </h1>
                <p className="text-text-muted text-lg max-w-lg mx-auto leading-relaxed">
                    Stay consistent, one checkmark at a time. transform your daily routine into a masterpiece.
                </p>
            </div>

            {/* Statistics */}
            <StatsBar total={goals.length} completed={completedCount} />

            {/* Input Form */}
            <form onSubmit={addGoal} className="max-w-xl mx-auto mb-12 relative animate-fade-in px-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="input-field shadow-lg shadow-black/5"
                        autoFocus
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
                    >
                        <Plus size={20} />
                        <span>Add Goal</span>
                    </button>
                </div>
            </form>

            {/* Goal List */}
            <div className="max-w-2xl mx-auto mb-20">
                <AnimatePresence mode="popLayout">
                    {goals.length > 0 ? (
                        <div className="space-y-4">
                            {goals.map(goal => (
                                <GoalCard
                                    key={goal.id}
                                    goal={goal}
                                    onToggle={toggleGoal}
                                    onDelete={deleteGoal}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 rounded-2xl border border-dashed border-white/10 bg-white/5 backdrop-blur-sm">
                            <div className="inline-flex p-5 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner mb-6 ring-1 ring-white/10">
                                <Plus size={32} className="text-gray-600" />
                            </div>
                            <h3 className="text-lg font-medium text-text-main mb-2">No goals yet</h3>
                            <p className="text-text-muted max-w-xs mx-auto">
                                Start your journey by adding your first goal above.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard;
