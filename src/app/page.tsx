import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <section className="flex flex-col items-center justify-center py-12 lg:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-primary-800">
              EduMLOps
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-center max-w-3xl text-gray-600">
              Master AI and MLOps with customized training classes powered by a Model Context Platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 text-lg"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-3 text-lg"
              >
                Learn More
              </Link>
            </div>
          </section>
          
          <section className="py-12 lg:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="Interactive Training Pipelines"
                description="Create and manage AI model training pipelines with an intuitive UI, inspired by VESSL AI's Pipeline UI."
                icon="🔄"
              />
              <FeatureCard 
                title="Model Context Platform (MCP)"
                description="Manage knowledge bases for retrieval-augmented generation (RAG) and personalized AI tutoring."
                icon="🧠"
              />
              <FeatureCard 
                title="n8n Workflow Automation"
                description="Automate class scheduling, assignment grading, and feedback loops with n8n integration."
                icon="⚙️"
              />
              <FeatureCard 
                title="Real-Time Dashboards"
                description="Track student progress and model performance with interactive visualizations."
                icon="📊"
              />
              <FeatureCard 
                title="AI-Driven Learning"
                description="Multi-agent infrastructure for personalized tutoring with context-aware responses."
                icon="🤖"
              />
              <FeatureCard 
                title="Customized Learning Paths"
                description="Adaptive modules based on student performance, leveraging MCP for contextual insights."
                icon="🧭"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 