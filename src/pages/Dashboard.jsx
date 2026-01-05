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
        <div className="space-y-8 animate-fade-in pb-10">
            {/* Header / Welcome - Optional if TopNav handles it, but good for context */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-white">My Goals</h1>
                <p className="text-text-muted">Track your daily progress and build consistency.</p>
            </div>

            {/* Stats Overview */}
            <StatsBar total={goals.length} completed={completedCount} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Goals List */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Input Area */}
                    <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                        <h3 className="text-lg font-semibold text-white mb-4">Add New Goal</h3>
                        <form onSubmit={addGoal} className="relative">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="e.g. Read 30 minutes..."
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="input-field flex-1 bg-bg-main border-white/5 focus:bg-bg-input"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap px-8"
                                >
                                    <Plus size={20} />
                                    <span>Add</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Goals List */}
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
                            <div className="text-center py-16 rounded-2xl border border-dashed border-white/10 bg-bg-card/50">
                                <h3 className="text-lg font-medium text-text-main mb-2">No goals set yet</h3>
                                <p className="text-text-muted text-sm">Create your first goal to start tracking.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar / Extra Widgets (mocking the Calendar/Streak from reference) */}
                <div className="space-y-6">
                    {/* Streak Widget Mockup */}
                    <div className="bg-gradient-to-b from-purple-900/20 to-bg-card border border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                            <span className="text-2xl font-bold text-white">🔥</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">5 Day Streak!</h3>
                        <p className="text-text-muted text-sm">You're on fire! Keep it up.</p>
                    </div>

                    {/* Progress Widget */}
                    <div className="bg-bg-card border border-white/5 rounded-2xl p-6">
                        <h3 className="font-semibold text-white mb-4">Daily Progress</h3>
                        <div className="relative pt-2">
                            <div className="flex items-end justify-between mb-2">
                                <span className="text-sm font-medium text-text-muted">Completed</span>
                                <span className="text-2xl font-bold text-white">{completedCount}/{goals.length}</span>
                            </div>
                            <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-gradient-primary h-full rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${goals.length === 0 ? 0 : (completedCount / goals.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
