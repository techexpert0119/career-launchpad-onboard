
import { useState } from "react";
import { FileText, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  type: string;
  status: "pending" | "approved" | "rejected";
  uploadedAt: string;
}

export const DocumentUpload = () => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "ID Card.pdf",
      type: "Identification",
      status: "approved",
      uploadedAt: "2023-04-05",
    },
    {
      id: "2",
      name: "TaxForm.pdf",
      type: "Tax Form",
      status: "pending",
      uploadedAt: "2023-04-06",
    }
  ]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    // In a real app, you would handle file uploads here
    toast({
      title: "File received",
      description: "Your document has been uploaded and is awaiting approval.",
    });
    
    // Simulate adding a new document with a valid status type
    const newDoc: Document = {
      id: String(documents.length + 1),
      name: "New Document.pdf",
      type: "Other",
      status: "pending", // Now explicitly using a valid literal value
      uploadedAt: new Date().toISOString().split("T")[0],
    };
    
    setDocuments([...documents, newDoc]);
  };

  const handleFileInputChange = () => {
    // In a real app, you would handle file uploads here
    toast({
      title: "File received",
      description: "Your document has been uploaded and is awaiting approval.",
    });
    
    // Simulate adding a new document with a valid status type
    const newDoc: Document = {
      id: String(documents.length + 1),
      name: "New Document.pdf",
      type: "Other",
      status: "pending", // Now explicitly using a valid literal value
      uploadedAt: new Date().toISOString().split("T")[0],
    };
    
    setDocuments([...documents, newDoc]);
  };

  const removeDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
    toast({
      title: "Document removed",
      description: "The document has been removed from your files.",
    });
  };

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Required Documents</h2>
      
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center",
          isDragging ? "border-brand-400 bg-brand-50" : "border-gray-200 hover:border-brand-300"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-brand-50 rounded-full flex items-center justify-center mb-3">
            <Upload className="h-6 w-6 text-brand-500" />
          </div>
          <p className="text-sm font-medium mb-1">
            Drag and drop your files here
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Supported formats: PDF, JPEG, PNG (up to 10MB)
          </p>
          <div>
            <label htmlFor="file-upload">
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileInputChange}
              />
              <Button type="button" size="sm" variant="outline" className="relative">
                Select Files
              </Button>
            </label>
          </div>
        </div>
      </div>

      {documents.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">Uploaded Documents</h3>
          <ul className="space-y-2">
            {documents.map((doc) => (
              <li key={doc.id} className="border rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                    <FileText className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    doc.status === "approved" ? "bg-green-100 text-green-700" :
                    doc.status === "rejected" ? "bg-red-100 text-red-700" :
                    "bg-amber-100 text-amber-700"
                  )}>
                    {doc.status === "approved" ? "Approved" : 
                     doc.status === "rejected" ? "Rejected" : "Pending"}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="ml-2 h-8 w-8 p-0"
                    onClick={() => removeDocument(doc.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
