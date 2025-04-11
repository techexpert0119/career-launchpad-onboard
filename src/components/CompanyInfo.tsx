
import { Building, Clock, MapPin, Phone, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export const CompanyInfo = () => {
  const companyDetails = {
    name: "TechCorp Solutions",
    address: "123 Innovation Drive, San Francisco, CA 94103",
    phone: "(555) 123-4567",
    employeeCount: "250+",
    officeHours: "Mon-Fri: 9:00 AM - 6:00 PM",
  };
  
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "HR Manager",
      avatar: "",
    },
    {
      id: "2",
      name: "David Chen",
      role: "Department Head",
      avatar: "",
    },
    {
      id: "3",
      name: "Priya Sharma",
      role: "Team Lead",
      avatar: "",
    },
    {
      id: "4",
      name: "Marcus Wilson",
      role: "Mentor",
      avatar: "",
    },
  ];

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Company Information</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">About the company</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center mr-3">
                <Building className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{companyDetails.name}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <MapPin className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-sm">{companyDetails.address}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center mr-3">
                <Phone className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-sm">{companyDetails.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center mr-3">
                <Users className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-sm">{companyDetails.employeeCount} employees</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-sm">{companyDetails.officeHours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Meet your team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center p-3 border rounded-lg bg-gray-50">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-brand-100 text-brand-700">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
