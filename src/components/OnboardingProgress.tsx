
import { useEffect, useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface OnboardingProgressProps {
  completedSteps: number;
  totalSteps: number;
}

export const OnboardingProgress = ({ completedSteps, totalSteps }: OnboardingProgressProps) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = Math.floor((completedSteps / totalSteps) * 100);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(progressPercentage), 500);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Onboarding Progress</h2>
        <span className="text-sm font-medium bg-brand-50 text-brand-600 px-3 py-1 rounded-full">
          {progressPercentage}% Complete
        </span>
      </div>
      
      <Progress value={progressValue} className="h-2 mb-4" />
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm font-medium">Completed steps</span>
          </div>
          <span className="font-semibold">{completedSteps}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-sm font-medium">Remaining steps</span>
          </div>
          <span className="font-semibold">{totalSteps - completedSteps}</span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
