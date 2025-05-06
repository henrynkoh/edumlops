import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Pipelines() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Training Pipelines</h1>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
              Create Pipeline
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pipeline Overview</h2>
            <p className="text-gray-600 mb-4">
              Build and train AI models with an intuitive pipeline interface, inspired by VESSL AI's Pipeline UI.
              Connect to the Model Context Platform (MCP) for enhanced training with contextual data.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <StatCard label="Total Pipelines" value="8" />
              <StatCard label="Running" value="2" />
              <StatCard label="Completed" value="5" />
              <StatCard label="Failed" value="1" />
            </div>
          </div>
          
          <div className="grid gap-6">
            <PipelineCard 
              name="RAG Tutor Training"
              status="running"
              progress={67}
              created="2 days ago"
              description="Training a RAG-based tutor with MCP context for the MLOps Fundamentals course."
            />
            <PipelineCard 
              name="VESSL Integration Demo"
              status="running"
              progress={23}
              created="5 hours ago"
              description="Demonstrating integration with VESSL AI for model experimentation and tracking."
            />
            <PipelineCard 
              name="Databricks MLflow Pipeline"
              status="completed"
              progress={100}
              created="1 week ago"
              description="Integrating with Databricks MLflow for experiment tracking and model registry."
            />
            <PipelineCard 
              name="TrueFoundry Deployment"
              status="completed"
              progress={100}
              created="2 weeks ago"
              description="Kubernetes-native deployment pipeline inspired by TrueFoundry's architecture."
            />
            <PipelineCard 
              name="n8n Workflow Builder"
              status="failed"
              progress={45}
              created="3 days ago"
              description="Pipeline for automating MLOps workflows using n8n integration."
            />
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

function PipelineCard({ 
  name, 
  status, 
  progress, 
  created, 
  description 
}: { 
  name: string; 
  status: 'running' | 'completed' | 'failed'; 
  progress: number; 
  created: string;
  description: string;
}) {
  const statusColors = {
    running: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
  };
  
  const progressBarColors = {
    running: 'bg-blue-500',
    completed: 'bg-green-500',
    failed: 'bg-red-500',
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center mt-2 md:mt-0">
          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="text-xs text-gray-500 ml-3">Created {created}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <div className="mt-4">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-gray-700">Progress</span>
          <span className="text-xs font-medium text-gray-700">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${progressBarColors[status]} h-2 rounded-full`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
} 