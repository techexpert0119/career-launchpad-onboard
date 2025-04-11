
import Navbar from "@/components/Navbar";
import WelcomeHeader from "@/components/WelcomeHeader";
import OnboardingProgress from "@/components/OnboardingProgress";

const Dashboard = () => {
  // In a real application, this data would come from an API or authentication context
  const userData = {
    name: "John Doe",
    daysLeft: 14,
    startDate: "April 25, 2025",
    completedSteps: 2,
    totalSteps: 8,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <WelcomeHeader 
          employeeName={userData.name} 
          daysLeft={userData.daysLeft}
          startDate={userData.startDate}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-blue-800">Tasks Completed</h3>
                  <p className="text-2xl font-bold">{userData.completedSteps} / {userData.totalSteps}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-green-800">Days Until Start</h3>
                  <p className="text-2xl font-bold">{userData.daysLeft}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-purple-800">Documents Submitted</h3>
                  <p className="text-2xl font-bold">2 / 4</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <OnboardingProgress 
              completedSteps={userData.completedSteps} 
              totalSteps={userData.totalSteps} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
