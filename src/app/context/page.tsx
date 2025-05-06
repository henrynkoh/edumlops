import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContextManager() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Model Context Platform (MCP)</h1>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
              Add New Context
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">MCP Overview</h2>
            <p className="text-gray-600 mb-4">
              The Model Context Platform (MCP) manages contextual data for AI models, particularly for 
              Retrieval-Augmented Generation (RAG) workflows and AI-driven tutoring. Upload knowledge bases,
              create embeddings, and enhance model responses with relevant context.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <StatCard label="Knowledge Bases" value="15" />
              <StatCard label="Vector Embeddings" value="124K" />
              <StatCard label="Storage Used" value="780 MB" />
              <StatCard label="Active Retrievers" value="8" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <InfoCard 
              title="Storing Context"
              description="Upload documents, course materials, FAQ datasets, and other text data to provide context for AI models."
              icon="📚"
            />
            <InfoCard 
              title="Processing"
              description="Automatically chunk, embed, and index content for efficient retrieval. Powered by vector databases."
              icon="⚙️"
            />
            <InfoCard 
              title="Retrieval"
              description="Enhance model outputs with retrieved context, critical for educational content delivery and personalized responses."
              icon="🔍"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Context Databases</h2>
              <p className="text-gray-600 mt-1">Manage your knowledge bases and context sources</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <ContextRow 
                    name="MLOps Fundamentals"
                    type="Course Material"
                    size="256 MB"
                    status="Active"
                    lastUpdated="2 days ago"
                  />
                  <ContextRow 
                    name="VESSL AI Documentation"
                    type="API Reference"
                    size="125 MB"
                    status="Active"
                    lastUpdated="1 week ago"
                  />
                  <ContextRow 
                    name="TrueFoundry Integration Guide"
                    type="Technical Guide"
                    size="89 MB"
                    status="Active"
                    lastUpdated="3 days ago"
                  />
                  <ContextRow 
                    name="Databricks MLflow Cookbook"
                    type="Tutorial"
                    size="142 MB"
                    status="Processing"
                    lastUpdated="5 hours ago"
                  />
                  <ContextRow 
                    name="n8n Workflow Examples"
                    type="Reference"
                    size="78 MB"
                    status="Active"
                    lastUpdated="1 day ago"
                  />
                  <ContextRow 
                    name="RAG Implementation Patterns"
                    type="Research Paper"
                    size="34 MB"
                    status="Active"
                    lastUpdated="1 week ago"
                  />
                  <ContextRow 
                    name="AI Ethics Guidelines"
                    type="Policy Document"
                    size="12 MB"
                    status="Inactive"
                    lastUpdated="3 weeks ago"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function InfoCard({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContextRow({ 
  name, 
  type, 
  size, 
  status, 
  lastUpdated 
}: { 
  name: string; 
  type: string; 
  size: string; 
  status: 'Active' | 'Processing' | 'Inactive'; 
  lastUpdated: string;
}) {
  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    Processing: 'bg-blue-100 text-blue-800',
    Inactive: 'bg-gray-100 text-gray-800',
  };
  
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{size}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {lastUpdated}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-primary-600 hover:text-primary-800 mr-3">View</button>
        <button className="text-gray-600 hover:text-gray-800">Edit</button>
      </td>
    </tr>
  );
} 