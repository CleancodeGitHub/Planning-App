import { Users, Video, Trophy } from 'lucide-react';

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Buy Grocery Items',
      time: '5:00 - 6:00 pm',
      location: 'Walmart, CA',
      travel: '30 min drive',
      priority: 'URGENT',
      priorityColor: 'text-red-500',
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      icon: <Users className="w-5 h-5" />,
      title: 'Discuss with Adrian Begi',
      description: 'Call Adrian at the right time',
      time: '6:00 pm',
      priority: 'MEDIUM',
      priorityColor: 'text-blue-500',
    },
    {
      id: 2,
      icon: <Video className="w-5 h-5" />,
      title: 'Video calling with Boss',
      description: 'Important meeting with CEO',
      time: '6:00 pm',
      priority: 'URGENT',
      priorityColor: 'text-red-500',
    },
    {
      id: 3,
      icon: <Trophy className="w-5 h-5" />,
      title: 'UEFA Champions League Final',
      description: 'Real Madrid vs Juventus',
      time: '6:00 pm',
      priority: 'LOW',
      priorityColor: 'text-green-500',
    },
  ];

  return (
    <div className="p-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white rounded-lg p-4 shadow-md mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600">
              TODAY <span className="ml-2">{task.time}</span>
            </p>
            <span className={`text-xs font-semibold ${task.priorityColor}`}>
              ● {task.priority}
            </span>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600">
              {task.time}
              <br />
              {task.location}
              <br />
              {task.travel}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          UPCOMING PLAN ({upcomingTasks.length})
        </h2>
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div key={task.id} className="flex items-start space-x-4">
              <div className="bg-gray-100 p-2 rounded-full">
                {task.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>
                <div className="flex items-center mt-1 text-sm">
                  <span className="text-gray-500">{task.time}</span>
                  <span className={`ml-2 ${task.priorityColor}`}>
                    ● {task.priority}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;