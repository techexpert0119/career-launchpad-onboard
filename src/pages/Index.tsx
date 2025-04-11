
import Navbar from "@/components/Navbar";
import WelcomeHeader from "@/components/WelcomeHeader";
import OnboardingProgress from "@/components/OnboardingProgress";
import TaskList from "@/components/TaskList";
import DocumentUpload from "@/components/DocumentUpload";
import CompanyInfo from "@/components/CompanyInfo";
import PersonalInfoForm from "@/components/PersonalInfoForm";

const Index = () => {
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
          <div className="lg:col-span-2 space-y-8">
            <TaskList />
            
            <section id="documents" className="scroll-mt-20">
              <DocumentUpload />
            </section>
            
            <section id="personal" className="scroll-mt-20">
              <PersonalInfoForm />
            </section>
          </div>
          
          <div className="space-y-8">
            <OnboardingProgress 
              completedSteps={userData.completedSteps} 
              totalSteps={userData.totalSteps} 
            />
            
            <section id="team">
              <CompanyInfo />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
