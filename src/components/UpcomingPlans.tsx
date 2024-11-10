import React from 'react';
import { Users, Video, Trophy } from 'lucide-react';

const UpcomingPlans = () => {
  const plans = [
    {
      icon: <Users className="text-white" size={20} />,
      title: 'Discuss with Adrian Begi',
      description: 'Call Adrian at the right time',
      time: '6:00 pm',
      priority: 'MEDIUM',
      bgColor: 'bg-blue-500',
    },
    {
      icon: <Video className="text-white" size={20} />,
      title: 'Video calling with Boss',
      description: 'Important meeting with CEO',
      time: '6:00 pm',
      priority: 'URGENT',
      bgColor: 'bg-purple-500',
    },
    {
      icon: <Trophy className="text-white" size={20} />,
      title: 'UEFA Champions League Final',
      description: 'Real Madrid vs Juventus',
      time: '6:00 pm',
      priority: 'LOW',
      bgColor: 'bg-green-500',
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold text-gray-500 mb-4">UPCOMING PLANS (3)</h2>
      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${plan.bgColor} p-2 rounded-full`}>
              {plan.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{plan.title}</h3>
              <p className="text-sm text-gray-500">{plan.description}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-500">{plan.time}</span>
                <span className={`text-sm ${
                  plan.priority === 'URGENT' ? 'text-red-500' :
                  plan.priority === 'MEDIUM' ? 'text-blue-500' :
                  'text-green-500'
                }`}>
                  • {plan.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPlans;