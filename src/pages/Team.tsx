
import Navbar from "@/components/Navbar";
import CompanyInfo from "@/components/CompanyInfo";

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Team</h1>
          <p className="text-gray-500">Meet the people you'll be working with</p>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <CompanyInfo />
        </div>
      </div>
    </div>
  );
};

export default Team;
