import { Calendar as CalendarIcon, MessageSquare, Menu, AlarmClock, ArrowUpDown, Users, BellOff, BarChart3, Plus } from 'lucide-react';
import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(20);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="bg-white rounded-t-3xl shadow-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Menu className="w-6 h-6 text-gray-600" />
            <span className="text-sm text-gray-600">Today</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
              <CalendarIcon className="w-5 h-5" />
            </button>
            <button className="text-gray-400">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
              <span className="text-lg font-bold">{selectedDate}</span>
              <span className="text-xs">Mar</span>
            </div>
            <div>
              <p className="text-gray-600">4 plans today</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <AlarmClock className="w-4 h-4 mr-1" />
              <span>4:30 PM</span>
            </div>
            <div className="flex items-center">
              <ArrowUpDown className="w-4 h-4 mr-1" />
              <span>Telecom</span>
            </div>
            <div>80% ●●●●○</div>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center text-sm text-gray-500">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  day === selectedDate
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;