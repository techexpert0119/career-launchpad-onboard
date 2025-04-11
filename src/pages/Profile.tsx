
import Navbar from "@/components/Navbar";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    startDate: "April 25, 2025",
    imageUrl: "" // Empty for default avatar fallback
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-500">View and edit your profile information</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
              <CardDescription>Your basic information</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback className="text-lg">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-500">{user.position}</p>
              <div className="w-full mt-4 space-y-2 text-left">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Email</span>
                  <span>{user.email}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Department</span>
                  <span>{user.department}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Start Date</span>
                  <span>{user.startDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2">
            <PersonalInfoForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
