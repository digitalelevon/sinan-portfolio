
import React from 'react';

interface ComingSoonProps {
    title: string;
    description: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-dark text-white p-4">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shine bg-[length:200%_auto]">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    {description}
                </p>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default ComingSoon;
