
import { useState } from "react";
import { 
  CheckCircle2, 
  Circle, 
  FileText, 
  Lock, 
  PenLine, 
  Smile, 
  UserCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
  category: "documents" | "forms" | "learning" | "setup";
  icon: keyof typeof iconMap;
}

const iconMap = {
  document: FileText,
  form: PenLine,
  profile: UserCheck,
  learning: Smile,
};

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete personal information",
      description: "Fill out your contact details, emergency contacts, and personal information",
      isCompleted: true,
      isLocked: false,
      category: "forms",
      icon: "form",
    },
    {
      id: "2",
      title: "Upload identification documents",
      description: "Provide your ID, work eligibility, and tax documents",
      isCompleted: true,
      isLocked: false,
      category: "documents",
      icon: "document",
    },
    {
      id: "3",
      title: "Fill employee profile",
      description: "Add your photo, bio, and social media links",
      isCompleted: false,
      isLocked: false,
      category: "forms",
      icon: "profile",
    },
    {
      id: "4",
      title: "Complete benefits enrollment",
      description: "Select your health insurance, retirement, and other benefits",
      isCompleted: false,
      isLocked: false,
      category: "forms",
      icon: "form",
    },
    {
      id: "5",
      title: "Review company handbook",
      description: "Read through company policies and procedures",
      isCompleted: false,
      isLocked: true,
      category: "learning",
      icon: "learning",
    },
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId && !task.isLocked
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Onboarding Tasks</h2>
        <span className="text-sm text-gray-500">
          {completedTasks.length} of {tasks.length} completed
        </span>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => {
          const Icon = iconMap[task.icon];
          
          return (
            <li 
              key={task.id} 
              className={cn(
                "border rounded-md p-4",
                task.isCompleted 
                  ? "bg-green-50 border-green-100" 
                  : task.isLocked 
                    ? "bg-gray-50 border-gray-200" 
                    : "bg-white hover:bg-brand-50 border-gray-200"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {task.isLocked ? (
                    <div className="h-5 w-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                      <Lock className="h-3 w-3" />
                    </div>
                  ) : task.isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={cn(
                        "font-medium",
                        task.isCompleted ? "text-green-700" : task.isLocked ? "text-gray-500" : "text-gray-900"
                      )}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center",
                        task.isLocked ? "bg-gray-100 text-gray-400" : 
                        task.isCompleted ? "bg-green-100 text-green-600" : "bg-brand-100 text-brand-600"
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  {!task.isLocked && (
                    <div className="mt-3 flex items-center">
                      <Button 
                        variant={task.isCompleted ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={task.isCompleted ? "border-green-200 text-green-700" : ""}
                      >
                        {task.isCompleted ? "Mark Incomplete" : "Complete Task"}
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="ml-2"
                      >
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
