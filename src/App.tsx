import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import SocialFeed from './components/SocialFeed';
import BottomNav from './components/BottomNav';
import { Plus } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto pb-20">
        <Calendar />
        <div className="relative">
          <TaskList />
          <SocialFeed />
          <button className="fixed bottom-24 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;