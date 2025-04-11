
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, Video, Link as LinkIcon } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Company Policies",
      description: "Essential company guidelines and policies",
      icon: FileText,
      resources: [
        { title: "Employee Handbook", type: "PDF", link: "#" },
        { title: "Code of Conduct", type: "PDF", link: "#" },
        { title: "IT Security Policy", type: "PDF", link: "#" },
      ]
    },
    {
      title: "Learning Materials",
      description: "Educational resources to help you get started",
      icon: Book,
      resources: [
        { title: "Onboarding Guide", type: "PDF", link: "#" },
        { title: "Department Overview", type: "PDF", link: "#" },
        { title: "Product Knowledge Base", type: "Link", link: "#" },
      ]
    },
    {
      title: "Training Videos",
      description: "Video tutorials and company presentations",
      icon: Video,
      resources: [
        { title: "Welcome Message", type: "Video", link: "#" },
        { title: "System Training", type: "Video", link: "#" },
        { title: "Benefits Overview", type: "Video", link: "#" },
      ]
    },
    {
      title: "Useful Links",
      description: "Important links and tools",
      icon: LinkIcon,
      resources: [
        { title: "HR Portal", type: "Link", link: "#" },
        { title: "IT Support", type: "Link", link: "#" },
        { title: "Internal Directory", type: "Link", link: "#" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-500">Helpful materials for your onboarding journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.resources.map((resource, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b pb-2 last:border-0">
                      <span className="font-medium">{resource.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                        <a 
                          href={resource.link} 
                          className="text-xs text-primary hover:underline"
                        >
                          View
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
