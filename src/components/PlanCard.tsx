import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface PlanCardProps {
  time: string;
  title: string;
  location: string;
  duration: string;
  priority: 'URGENT' | 'MEDIUM' | 'LOW';
}

const PriorityColors = {
  URGENT: 'text-red-500',
  MEDIUM: 'text-blue-500',
  LOW: 'text-green-500',
};

const PlanCard = ({ time, title, location, duration, priority }: PlanCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-gray-500">
          TODAY <span className="ml-2">{time}</span>
        </div>
        <div className={`flex items-center gap-1 ${PriorityColors[priority]}`}>
          <span className="text-lg">•</span>
          <span className="text-xs font-semibold">{priority}</span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;