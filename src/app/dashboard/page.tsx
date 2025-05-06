import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard 
              title="Course Progress" 
              value="75%" 
              description="Overall completion rate"
              color="bg-primary-600"
            />
            <DashboardCard 
              title="Active Models" 
              value="5" 
              description="Models in training/deployment"
              color="bg-secondary-600"
            />
            <DashboardCard 
              title="Contexts" 
              value="12" 
              description="Knowledge bases in MCP"
              color="bg-green-600"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                <ActivityItem 
                  title="Pipeline Created" 
                  description="RAG Training Pipeline for Course #3"
                  time="2 hours ago"
                />
                <ActivityItem 
                  title="Context Added" 
                  description="New knowledge base for MLOps Fundamentals"
                  time="5 hours ago"
                />
                <ActivityItem 
                  title="Model Deployed" 
                  description="Tutor Assistant v2 is now live"
                  time="Yesterday"
                />
                <ActivityItem 
                  title="Workflow Automated" 
                  description="Added n8n workflow for weekly reports"
                  time="2 days ago"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Context Manager</h2>
              <p className="text-gray-600 mb-4">
                The Model Context Platform (MCP) helps manage knowledge bases for AI tutoring and RAG workflows.
              </p>
              <div className="space-y-3">
                <ContextItem 
                  name="MLOps Basics" 
                  size="2.3 MB" 
                  type="Course Material"
                />
                <ContextItem 
                  name="AI Ethics" 
                  size="1.8 MB" 
                  type="Reference"
                />
                <ContextItem 
                  name="RAG Techniques" 
                  size="3.1 MB" 
                  type="Tutorial"
                />
                <ContextItem 
                  name="Databricks Integration" 
                  size="1.5 MB" 
                  type="Guide"
                />
              </div>
              <div className="mt-4">
                <a href="/context" className="text-primary-600 hover:text-primary-800 font-medium">
                  Manage all contexts →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function DashboardCard({ 
  title, 
  value, 
  description, 
  color 
}: { 
  title: string; 
  value: string; 
  description: string; 
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${color} h-2`}></div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

function ActivityItem({ 
  title, 
  description, 
  time 
}: { 
  title: string; 
  description: string; 
  time: string;
}) {
  return (
    <div className="flex items-start border-b border-gray-100 pb-3">
      <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <span className="text-xs text-gray-400 mt-1">{time}</span>
      </div>
    </div>
  );
}

function ContextItem({ 
  name, 
  size, 
  type 
}: { 
  name: string; 
  size: string; 
  type: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <div>
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{type}</p>
      </div>
      <div className="text-xs text-gray-400">{size}</div>
    </div>
  );
} 