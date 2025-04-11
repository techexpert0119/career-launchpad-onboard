
import Navbar from "@/components/Navbar";
import DocumentUpload from "@/components/DocumentUpload";

const Documents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Required Documents</h1>
          <p className="text-gray-500">Upload all your necessary documentation</p>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <DocumentUpload />
        </div>
      </div>
    </div>
  );
};

export default Documents;
