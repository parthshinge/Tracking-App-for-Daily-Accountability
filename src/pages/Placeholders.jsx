import React from 'react';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title }) => (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
        <div className="glass-panel p-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 text-primary">
                <Construction size={48} />
            </div>
            <h1 className="text-4xl font-bold accent-gradient-text mb-4">{title}</h1>
            <p className="text-gray-400 text-lg">Work in progress. Something amazing is coming soon.</p>
        </div>
    </div>
);

export const Habits = () => <PlaceholderPage title="Habit Manager" />;
// Coach is now a real page, removing export if unused or keeping for safety logic in other imports
export const Analytics = () => <PlaceholderPage title="Deep Analytics" />;

