import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
              Enroll in Course
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">AI and MLOps Programs</h2>
            <p className="text-gray-600 mb-4">
              Learn AI and MLOps with our customized training programs. All courses leverage the 
              Model Context Platform (MCP) for personalized learning experiences and context-aware 
              AI tutoring assistance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <StatCard label="Total Courses" value="8" />
              <StatCard label="Enrolled" value="3" />
              <StatCard label="Completed" value="1" />
              <StatCard label="Available Certificates" value="4" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard 
              title="MLOps Fundamentals"
              instructor="Dr. Sarah Chen"
              level="Beginner"
              duration="6 weeks"
              rating={4.8}
              enrolled={2456}
              image="/mlops-fundamentals.jpg"
              contextFeatures={["RAG-enhanced materials", "AI tutor"]}
            />
            <CourseCard 
              title="Retrieval-Augmented Generation"
              instructor="Prof. Michael Johnson"
              level="Intermediate"
              duration="8 weeks"
              rating={4.9}
              enrolled={1875}
              image="/rag-course.jpg"
              contextFeatures={["Vector databases", "Context optimization"]}
            />
            <CourseCard 
              title="VESSL AI Pipeline Mastery"
              instructor="Lisa Tang"
              level="Advanced"
              duration="10 weeks"
              rating={4.7}
              enrolled={1243}
              image="/vessl-ai.jpg"
              contextFeatures={["Hyperpocket integration", "MCP tuning"]}
            />
            <CourseCard 
              title="Databricks MLflow Integration"
              instructor="Dr. Robert Wilson"
              level="Intermediate"
              duration="6 weeks"
              rating={4.6}
              enrolled={1645}
              image="/databricks.jpg"
              contextFeatures={["Experiment tracking", "MCP with MLflow"]}
            />
            <CourseCard 
              title="TrueFoundry Kubernetes Deployment"
              instructor="Amit Patel"
              level="Advanced"
              duration="8 weeks"
              rating={4.5}
              enrolled={986}
              image="/truefoundry.jpg"
              contextFeatures={["Observability", "Context-aware monitoring"]}
            />
            <CourseCard 
              title="n8n Workflow Automation"
              instructor="Elena Rodriguez"
              level="Intermediate"
              duration="4 weeks"
              rating={4.7}
              enrolled={1432}
              image="/n8n.jpg"
              contextFeatures={["Automated pipelines", "Context integration"]}
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

function CourseCard({ 
  title, 
  instructor, 
  level, 
  duration, 
  rating, 
  enrolled,
  image,
  contextFeatures
}: { 
  title: string; 
  instructor: string; 
  level: string; 
  duration: string;
  rating: number;
  enrolled: number;
  image: string;
  contextFeatures: string[];
}) {
  // Generate course-specific placeholder images with tech themes
  const generateImageUrl = (courseTitle: string) => {
    // Map course titles to appropriate placeholder images
    const imageMap: {[key: string]: string} = {
      "MLOps Fundamentals": "https://placehold.co/600x400/3498db/FFFFFF?text=MLOps+Fundamentals&font=montserrat",
      "Retrieval-Augmented Generation": "https://placehold.co/600x400/9b59b6/FFFFFF?text=RAG&font=montserrat",
      "VESSL AI Pipeline Mastery": "https://placehold.co/600x400/e74c3c/FFFFFF?text=AI+Pipelines&font=montserrat",
      "Databricks MLflow Integration": "https://placehold.co/600x400/2ecc71/FFFFFF?text=MLflow&font=montserrat",
      "TrueFoundry Kubernetes Deployment": "https://placehold.co/600x400/f39c12/FFFFFF?text=K8s+Deployment&font=montserrat",
      "n8n Workflow Automation": "https://placehold.co/600x400/1abc9c/FFFFFF?text=Workflow+Automation&font=montserrat"
    };
    
    return imageMap[courseTitle] || `https://placehold.co/600x400/95a5a6/FFFFFF?text=${encodeURIComponent(courseTitle)}&font=montserrat`;
  };
  
  // Function to convert title to slug for URL
  const titleToSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: `url(${generateImageUrl(title)})` }}
        ></div>
        <div className="absolute bottom-0 left-0 bg-primary-600 text-white px-3 py-1 text-sm font-medium">{level}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">Instructor: {instructor}</p>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-gray-700 ml-1">{rating.toFixed(1)}</span>
            <span className="text-gray-500 ml-2">({enrolled.toLocaleString()} students)</span>
          </div>
          <span className="text-gray-500">{duration}</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">MCP Features:</h4>
          <div className="flex flex-wrap gap-2">
            {contextFeatures.map((feature, index) => (
              <span 
                key={index} 
                className="bg-primary-50 text-primary-800 text-xs px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <a 
          href={`/courses/${titleToSlug(title)}`}
          className="block w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-md transition-colors text-center"
        >
          View Course
        </a>
      </div>
    </div>
  );
} 