
import { Clock } from "lucide-react";

interface WelcomeHeaderProps {
  employeeName: string;
  daysLeft: number;
  startDate: string;
}

export const WelcomeHeader = ({ employeeName, daysLeft, startDate }: WelcomeHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white p-6 sm:p-10 rounded-lg shadow-md mb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Welcome to the team, {employeeName}!
          </h1>
          <p className="text-brand-100 mb-4">
            We're excited to have you join us. Let's get you all set up.
          </p>
          <p className="flex items-center text-sm font-medium bg-white/20 rounded-full w-fit px-3 py-1">
            <Clock className="h-4 w-4 mr-1" /> Starting on {startDate}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-white text-brand-600 rounded-xl p-4 inline-block">
            <p className="text-sm uppercase font-semibold">Days until start</p>
            <p className="text-3xl sm:text-4xl font-bold">{daysLeft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
