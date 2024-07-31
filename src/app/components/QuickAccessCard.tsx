// src/components/QuickAccessCard.tsx
import React, { useState } from 'react';
import { IconType } from 'react-icons';

interface QuickAccessCardProps {
    title: string;
    description: string;
    icon: IconType;
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ title, description, icon: Icon }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className={`relative bg-blue-100 text-grey rounded-lg overflow-hidden cursor-pointer w-5 transition-all ${isHovered ? 'h-48' : 'h-24'} w-full`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-2 flex items-center justify-center flex-col h-full">
                {Icon && <Icon className="w-10 h-full mb-2" />}
                <h3 className="text-xl font-semibold text-center">{title}</h3>
            </div>
            {isHovered && (
                <div className="absolute inset-0 bg-blue-200 bg-opacity-100 flex flex-col items-center justify-center text-center p-1 transition-opacity">
                     {Icon && <Icon className="w-8 h-8 mb-" />}
                    <p className="mb-2">{description}</p>
                </div>
            )}
        </div>
    );
};

export default QuickAccessCard;
