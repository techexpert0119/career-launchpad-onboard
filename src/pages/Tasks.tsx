
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Onboarding Tasks</h1>
          <p className="text-gray-500">Complete these tasks before your first day</p>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
