import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Trophy, Target, Zap, Activity } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import HabitItem from '../components/dashboard/HabitItem';

const Dashboard = () => {
    const [habits, setHabits] = useState([
        { id: 1, title: 'Morning Meditation', time: '07:00 AM', completed: true, streak: 12 },
        { id: 2, title: 'Deep Work Session', time: '09:00 AM', completed: false, streak: 5 },
        { id: 3, title: 'Read 30 Pages', time: '08:00 PM', completed: false, streak: 24 },
        { id: 4, title: 'Workout', time: '06:00 PM', completed: false, streak: 3 },
    ]);

    const [date, setDate] = useState(new Date());

    const toggleHabit = (id) => {
        setHabits(habits.map(h =>
            h.id === id ? { ...h, completed: !h.completed } : h
        ));
    };

    const completedCount = habits.filter(h => h.completed).length;
    const progress = Math.round((completedCount / habits.length) * 100);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Good Evening, Parth
                    </h2>
                    <p className="text-gray-400 mt-1">{format(date, 'EEEE, MMMM do, yyyy')}</p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm text-gray-400">Daily Progress</p>
                    <div className="text-2xl font-bold text-primary">{progress}%</div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Current Streak" value="12 Days" icon={Zap} color="warning" trend={12} />
                <StatCard title="Completion Rate" value={`${progress}%`} icon={Target} color="primary" trend={5} />
                <StatCard title="Total Focus" value="42h" icon={Activity} color="success" trend={8} />
                <StatCard title="Milestones" value="3" icon={Trophy} color="accent" />
            </div>

            {/* Main Content Split */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Habits Column (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">Today's Focus</h3>
                        <button className="text-sm text-primary hover:text-primary-glow transition-colors font-medium">
                            + Add Habit
                        </button>
                    </div>

                    <div className="space-y-3">
                        {habits.map(habit => (
                            <HabitItem key={habit.id} habit={habit} onToggle={toggleHabit} />
                        ))}
                    </div>
                </div>

                {/* AI Insight Column (1/3) */}
                <div className="lg:col-span-1">
                    <div className="glass-panel p-6 h-full border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20 text-primary">
                            <Zap size={100} />
                        </div>

                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <span className="text-primary">✦</span> AI Insight
                        </h3>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            "You're crushing your reading goals! 📚 Based on your patterns, you're <strong>20% more consistent</strong> when you read before 9 PM. Let's aim to finish that chapter early today."
                        </p>

                        <button className="w-full glass-button py-3 rounded-lg text-sm font-medium hover:bg-primary hover:border-primary">
                            Chat with Coach
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
