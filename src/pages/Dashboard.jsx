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
            <div className="text-center py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Goals & Habits</h1>
                <p className="text-gray-500 text-lg">Stay consistent, one checkmark at a time.</p>
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
                        className="input-field shadow-sm"
                        autoFocus
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
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
                        <div className="space-y-3">
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
                        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                            <div className="inline-flex p-4 rounded-full bg-gray-50 text-gray-400 mb-4">
                                <Plus size={32} />
                            </div>
                            <p className="text-lg font-medium text-gray-500">No goals yet — add one!</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard;
