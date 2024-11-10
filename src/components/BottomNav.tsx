import { CalendarCheck, BellOff, Users, BarChart3 } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around p-4">
        <button className="text-gray-600 hover:text-blue-600">
          <CalendarCheck className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <BellOff className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <Users className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <BarChart3 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;