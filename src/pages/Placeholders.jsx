import React from 'react';

const PlaceholderPage = ({ title }) => (
    <div className="flex flex-col items-center justify-center p-20 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">{title}</h1>
        <p className="text-gray-500">Coming Soon</p>
    </div>
);

export const Habits = () => <PlaceholderPage title="Habit Manager" />;
export const Coach = () => <PlaceholderPage title="AI Coach" />;
export const Analytics = () => <PlaceholderPage title="Deep Analytics" />;
