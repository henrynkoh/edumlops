import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduMLOps</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering organizations with customized AI and MLOps education through our innovative Model Context Platform
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                EduMLOps was founded with a clear mission: to bridge the knowledge gap in AI and MLOps through contextually-aware, personalized education. We believe that effective learning happens when educational content adapts to the unique needs and contexts of each learner.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines cutting-edge AI technologies from industry leaders like VESSL AI, TrueFoundry, and Databricks with our proprietary Model Context Platform (MCP) to deliver educational experiences that are both comprehensive and deeply personalized.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Core Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MCP Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Model Context Platform</h3>
                  <p className="text-gray-600">
                    Our proprietary MCP serves as the foundation of the EduMLOps experience, providing contextually-aware learning through:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Retrieval-augmented generation for adaptive content</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Personalized learning paths based on prior knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>AI tutoring with deep understanding of student needs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Training Pipelines Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Interactive Training Pipelines</h3>
                  <p className="text-gray-600">
                    Built with inspiration from VESSL AI's pipeline architecture, our interactive training flows enable:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Hands-on learning with real-world ML workflows</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Experiment tracking and visualization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Progressive model development skills</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Integration Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Enterprise Integrations</h3>
                  <p className="text-gray-600">
                    EduMLOps seamlessly integrates with the tools organizations already use:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>n8n workflow automation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Databricks MLflow experiment tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Kubernetes deployments via TrueFoundry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Transform Your AI Learning?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join organizations worldwide that are accelerating their AI and MLOps capabilities through EduMLOps' contextually-aware education platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-md bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 text-lg"
              >
                Browse Courses
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-3 text-lg"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 