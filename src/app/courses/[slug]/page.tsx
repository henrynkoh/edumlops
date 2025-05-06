import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Course data with AI/LLM generated content
const COURSES = {
  'mlops-fundamentals': {
    title: 'MLOps Fundamentals',
    instructor: 'Dr. Sarah Chen',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.8,
    enrolled: 2456,
    image: 'https://placehold.co/1200x400/3498db/FFFFFF?text=MLOps+Fundamentals&font=montserrat',
    contextFeatures: ['RAG-enhanced materials', 'AI tutor'],
    description: `This comprehensive MLOps Fundamentals course introduces you to the essential practices and tools for operationalizing machine learning models at scale. Learn how to bridge the gap between data science and engineering by implementing continuous integration, deployment, and monitoring for ML systems.`,
    syllabus: [
      {
        week: 1,
        title: 'Introduction to MLOps',
        content: 'Overview of ML lifecycle, challenges in productionizing ML models, and the emergence of MLOps as a discipline.'
      },
      {
        week: 2,
        title: 'ML Development Environment',
        content: 'Setting up reproducible development environments with Docker, virtual environments, and configuration management.'
      },
      {
        week: 3,
        title: 'Version Control for ML',
        content: 'Data versioning, model versioning, and experiment tracking with DVC and Git.'
      },
      {
        week: 4,
        title: 'CI/CD for Machine Learning',
        content: 'Implementing continuous integration and deployment pipelines for ML models.'
      },
      {
        week: 5,
        title: 'Model Serving and Deployment',
        content: 'Different deployment strategies, serving models via REST APIs, and model containerization.'
      },
      {
        week: 6,
        title: 'Model Monitoring and Management',
        content: 'Setting up monitoring for model performance, drift detection, and automated retraining strategies.'
      }
    ],
    faqs: [
      {
        question: 'What prerequisites are needed for this course?',
        answer: 'Basic Python programming experience and familiarity with machine learning concepts. Prior experience with a framework like scikit-learn or TensorFlow is helpful but not required.'
      },
      {
        question: 'How is the Model Context Platform (MCP) used in this course?',
        answer: 'The MCP provides enhanced learning materials through RAG technology, giving you contextually relevant information during labs and assignments. The AI tutor feature uses the MCP to understand your specific challenges and provide personalized guidance.'
      },
      {
        question: 'Will I receive a certificate upon completion?',
        answer: 'Yes, upon successful completion of all modules and the final project, you will receive an EduMLOps certificate that can be shared on LinkedIn and other platforms.'
      }
    ]
  },
  'retrieval-augmented-generation': {
    title: 'Retrieval-Augmented Generation',
    instructor: 'Prof. Michael Johnson',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.9,
    enrolled: 1875,
    image: 'https://placehold.co/1200x400/9b59b6/FFFFFF?text=RAG&font=montserrat',
    contextFeatures: ['Vector databases', 'Context optimization'],
    description: `Enhance your understanding of Retrieval-Augmented Generation (RAG), a powerful technique that combines information retrieval with generative AI. This course covers how to build systems that can access, retrieve, and leverage external knowledge to produce more accurate, relevant, and contextual responses.`,
    syllabus: [
      {
        week: 1,
        title: 'Foundations of RAG',
        content: 'Introduction to RAG architecture, applications, and advantages over pure generative models.'
      },
      {
        week: 2,
        title: 'Document Processing and Chunking',
        content: 'Techniques for processing, parsing, and chunking documents for effective retrieval.'
      },
      {
        week: 3,
        title: 'Vector Embeddings and Semantic Search',
        content: 'Generating embeddings from text and implementing semantic search functionality.'
      },
      {
        week: 4,
        title: 'Vector Databases',
        content: 'Exploring vector database options (Pinecone, Weaviate, Milvus) and their implementation.'
      },
      {
        week: 5,
        title: 'Retrieval Strategies',
        content: 'Advanced retrieval techniques including hybrid search, re-ranking, and query expansion.'
      },
      {
        week: 6,
        title: 'Context Optimization',
        content: 'Optimizing context window usage, handling context limitations, and prompt engineering.'
      },
      {
        week: 7,
        title: 'Multi-modal RAG',
        content: 'Extending RAG to images, audio, and other data modalities.'
      },
      {
        week: 8,
        title: 'Evaluation and Optimization',
        content: 'Measuring RAG system performance, debugging, and optimization techniques.'
      }
    ],
    faqs: [
      {
        question: 'What prior knowledge is required for this course?',
        answer: 'Intermediate Python programming skills, basic understanding of machine learning concepts, and familiarity with transformer-based language models.'
      },
      {
        question: 'Which vector databases are covered in this course?',
        answer: 'The course covers Pinecone, Weaviate, Milvus, and Chroma, with hands-on examples for each. The Model Context Platform (MCP) integration features are demonstrated with all these databases.'
      },
      {
        question: 'Does this course cover enterprise-scale RAG systems?',
        answer: 'Yes, the later modules address scaling considerations including caching, cost optimization, and handling large document collections efficiently.'
      }
    ]
  },
  'vessl-ai-pipeline-mastery': {
    title: 'VESSL AI Pipeline Mastery',
    instructor: 'Lisa Tang',
    level: 'Advanced',
    duration: '10 weeks',
    rating: 4.7,
    enrolled: 1243,
    image: 'https://placehold.co/1200x400/e74c3c/FFFFFF?text=AI+Pipelines&font=montserrat',
    contextFeatures: ['Hyperpocket integration', 'MCP tuning'],
    description: `Master the art of building end-to-end AI pipelines with VESSL AI. This advanced course takes you through creating complex, production-grade AI systems with efficient pipeline architectures, experiment tracking, and multi-agent infrastructure designed for enterprise applications.`,
    syllabus: [
      {
        week: 1,
        title: 'VESSL AI Platform Introduction',
        content: 'Overview of the VESSL AI platform architecture, components, and deployment options.'
      },
      {
        week: 2,
        title: 'Pipeline Design Patterns',
        content: 'Key design patterns for robust and scalable AI pipelines, with industry examples.'
      },
      {
        week: 3,
        title: 'Data Preparation Pipelines',
        content: 'Building efficient data ingestion, transformation, and validation pipelines.'
      },
      {
        week: 4,
        title: 'Training Pipeline Architecture',
        content: 'Designing and implementing reproducible training workflows with hyperparameter tuning.'
      },
      {
        week: 5,
        title: 'Evaluation and Model Selection',
        content: 'Automated evaluation frameworks and intelligent model selection strategies.'
      },
      {
        week: 6,
        title: 'Pipeline Orchestration',
        content: 'Orchestrating complex pipelines with multiple dependencies and parallel execution.'
      },
      {
        week: 7,
        title: 'Hyperpocket Multi-Agent Infrastructure',
        content: 'Implementing and configuring multi-agent systems for complex AI workflows.'
      },
      {
        week: 8,
        title: 'MCP Integration',
        content: 'Integrating Model Context Platform for enhanced context awareness in pipelines.'
      },
      {
        week: 9,
        title: 'Pipeline Monitoring and Observability',
        content: 'Implementing comprehensive monitoring, logging, and alerting for AI pipelines.'
      },
      {
        week: 10,
        title: 'Enterprise Deployment Strategies',
        content: 'Strategies for deploying AI pipelines in enterprise environments with security and compliance.'
      }
    ],
    faqs: [
      {
        question: 'What level of experience is required for this course?',
        answer: 'This is an advanced course requiring strong Python programming skills, prior experience with ML frameworks, and familiarity with MLOps concepts. Professional experience deploying ML models is highly recommended.'
      },
      {
        question: 'How does Hyperpocket integrate with the Model Context Platform?',
        content: 'Hyperpocket's multi-agent infrastructure leverages MCP for enhanced context sharing between agents, allowing for more coordinated and coherent AI system behavior. The course includes practical implementations of this integration.'
      },
      {
        question: 'Will I need to have access to VESSL AI to complete the course?',
        answer: 'The course provides access to a VESSL AI environment for all exercises and projects. You'll also learn how to set up your own VESSL instances for personal or organizational use.'
      }
    ]
  },
  'databricks-mlflow-integration': {
    title: 'Databricks MLflow Integration',
    instructor: 'Dr. Robert Wilson',
    level: 'Intermediate',
    duration: '6 weeks',
    rating: 4.6,
    enrolled: 1645,
    image: 'https://placehold.co/1200x400/2ecc71/FFFFFF?text=MLflow&font=montserrat',
    contextFeatures: ['Experiment tracking', 'MCP with MLflow'],
    description: `Learn how to leverage Databricks and MLflow to streamline your machine learning lifecycle. This course covers experiment tracking, model packaging, deployment, and integration with the Model Context Platform (MCP) for enhanced model management and contextual awareness.`,
    syllabus: [
      {
        week: 1,
        title: 'Databricks and MLflow Fundamentals',
        content: 'Introduction to Databricks platform and MLflow components for ML lifecycle management.'
      },
      {
        week: 2,
        title: 'Experiment Tracking with MLflow',
        content: 'Implementing comprehensive experiment tracking with metrics, parameters, and artifacts.'
      },
      {
        week: 3,
        title: 'Model Registry and Management',
        content: 'Managing models through their lifecycle with versioning, staging, and production transitions.'
      },
      {
        week: 4,
        title: 'MLflow Deployment Patterns',
        content: 'Strategies for model deployment using MLflow serving and integration with external systems.'
      },
      {
        week: 5,
        title: 'MCP Integration with MLflow',
        content: 'Enhancing MLflow with Model Context Platform for contextually-aware models and experiments.'
      },
      {
        week: 6,
        title: 'Enterprise MLOps with Databricks',
        content: 'Implementing enterprise-grade MLOps practices with Databricks, MLflow, and MCP.'
      }
    ],
    faqs: [
      {
        question: 'Is prior Databricks experience required?',
        answer: 'Basic familiarity with Databricks or similar Spark-based platforms is helpful but not mandatory. The course includes a quick onboarding module for Databricks fundamentals.'
      },
      {
        question: 'How does the Model Context Platform enhance MLflow?',
        answer: 'MCP provides contextual awareness for models tracked in MLflow, enabling richer experiment documentation, better model discovery, and context-aware inference. The integration allows models to access relevant context during both training and serving.'
      },
      {
        question: 'Will I receive Databricks certification through this course?',
        answer: 'While this is not an official Databricks certification course, the material covers much of what is needed for Databricks ML certification exams, and completion can be a valuable preparation step.'
      }
    ]
  },
  'truefoundry-kubernetes-deployment': {
    title: 'TrueFoundry Kubernetes Deployment',
    instructor: 'Amit Patel',
    level: 'Advanced',
    duration: '8 weeks',
    rating: 4.5,
    enrolled: 986,
    image: 'https://placehold.co/1200x400/f39c12/FFFFFF?text=K8s+Deployment&font=montserrat',
    contextFeatures: ['Observability', 'Context-aware monitoring'],
    description: `Master the art of deploying ML models at scale using TrueFoundry's Kubernetes-native infrastructure. This course covers containerization, orchestration, monitoring, and observability for production ML systems, with a focus on enterprise-ready deployment patterns.`,
    syllabus: [
      {
        week: 1,
        title: 'TrueFoundry Architecture Overview',
        content: 'Introduction to TrueFoundry's architecture, components, and deployment philosophy.'
      },
      {
        week: 2,
        title: 'Kubernetes Essentials for ML',
        content: 'Kubernetes concepts crucial for ML workloads: pods, deployments, services, and resource management.'
      },
      {
        week: 3,
        title: 'Containerizing ML Models',
        content: 'Best practices for containerizing ML models with optimized dependencies and performance.'
      },
      {
        week: 4,
        title: 'Deployment Strategies',
        content: 'Implementing canary, blue-green, and other advanced deployment strategies for ML models.'
      },
      {
        week: 5,
        title: 'Scaling and Resource Optimization',
        content: 'Horizontal and vertical scaling, auto-scaling, and resource allocation for ML workloads.'
      },
      {
        week: 6,
        title: 'Observability Stack',
        content: 'Implementing metrics, logging, and tracing for comprehensive ML system observability.'
      },
      {
        week: 7,
        title: 'Context-Aware Monitoring',
        content: 'Integrating the Model Context Platform for enhanced monitoring with contextual awareness.'
      },
      {
        week: 8,
        title: 'MLOps Automation with TrueFoundry',
        content: 'Building automated CI/CD pipelines for ML model deployment on Kubernetes.'
      }
    ],
    faqs: [
      {
        question: 'What Kubernetes experience is required?',
        answer: 'Basic familiarity with Kubernetes concepts is helpful. The course includes foundational material, but prior experience with containers (e.g., Docker) is strongly recommended.'
      },
      {
        question: 'Does the course cover GPU deployments?',
        answer: 'Yes, we cover both CPU and GPU deployment configurations, including multi-GPU setups, GPU sharing, and optimization techniques for deep learning models.'
      },
      {
        question: 'How is context-aware monitoring implemented?',
        answer: 'The course demonstrates how to integrate the Model Context Platform with monitoring systems to provide context-rich alerts and diagnostics. This includes correlating model performance with contextual factors for more insightful troubleshooting.'
      }
    ]
  },
  'n8n-workflow-automation': {
    title: 'n8n Workflow Automation',
    instructor: 'Elena Rodriguez',
    level: 'Intermediate',
    duration: '4 weeks',
    rating: 4.7,
    enrolled: 1432,
    image: 'https://placehold.co/1200x400/1abc9c/FFFFFF?text=Workflow+Automation&font=montserrat',
    contextFeatures: ['Automated pipelines', 'Context integration'],
    description: `Automate your MLOps workflows with n8n, a powerful workflow automation platform. Learn how to create automated pipelines for data collection, preprocessing, model training, evaluation, and deployment with minimal manual intervention, all enhanced with contextual awareness from the Model Context Platform.`,
    syllabus: [
      {
        week: 1,
        title: 'n8n Fundamentals',
        content: 'Introduction to n8n architecture, interface, and core concepts for workflow automation.'
      },
      {
        week: 2,
        title: 'Data Pipeline Automation',
        content: 'Building automated workflows for data collection, validation, and preprocessing.'
      },
      {
        week: 3,
        title: 'ML Workflow Integration',
        content: 'Connecting n8n with ML tools and platforms for training, evaluation, and deployment automation.'
      },
      {
        week: 4,
        title: 'MCP Integration and Advanced Patterns',
        content: 'Integrating the Model Context Platform for context-aware automation and implementing advanced workflow patterns.'
      }
    ],
    faqs: [
      {
        question: 'Is n8n experience required for this course?',
        answer: 'No prior n8n experience is needed. The course starts with fundamentals and progressively advances to complex workflow automation scenarios.'
      },
      {
        question: 'How does n8n compare to other workflow tools like Airflow?',
        answer: 'The course includes a comparison of n8n with other workflow tools, highlighting its advantages for certain use cases. n8n offers a more user-friendly interface while maintaining powerful integration capabilities.'
      },
      {
        question: 'Can I implement custom nodes for specialized ML tasks?',
        answer: 'Yes, the course covers creating custom n8n nodes for specialized ML tasks, including how to leverage the Model Context Platform for enhanced functionality.'
      }
    ]
  }
};

// Function to convert title to slug
const titleToSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Map for reverse lookup (slug to course data)
const SLUG_TO_COURSE_MAP = Object.entries(COURSES).reduce((acc, [slug, data]) => {
  acc[slug] = data;
  return acc;
}, {} as Record<string, any>);

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = SLUG_TO_COURSE_MAP[slug];
  
  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with course image */}
        <div className="relative h-80">
          <div 
            className="absolute inset-0 bg-center bg-cover" 
            style={{ backgroundImage: `url(${course.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <div className="inline-block px-3 py-1 text-sm font-semibold bg-primary-600 rounded-md mb-4">
              {course.level}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
            <p className="text-xl">Instructor: {course.instructor}</p>
          </div>
        </div>
        
        {/* Course content */}
        <div className="container mx-auto px-4 py-8">
          {/* Course overview */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center mr-6">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-gray-700 ml-1 font-medium">{course.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-2">({course.enrolled.toLocaleString()} students)</span>
                </div>
                <div className="text-gray-500">
                  <span className="font-medium">Duration:</span> {course.duration}
                </div>
              </div>
              <div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
            <p className="text-gray-700 mb-6">{course.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">MCP Features:</h3>
              <div className="flex flex-wrap gap-2">
                {course.contextFeatures.map((feature: string, index: number) => (
                  <span 
                    key={index} 
                    className="bg-primary-50 text-primary-800 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Syllabus */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h2>
            <div className="space-y-4">
              {course.syllabus.map((week: any, index: number) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{week.title}</h3>
                      <p className="text-gray-600 mt-1">{week.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQs */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {course.faqs.map((faq: any, index: number) => (
                <div key={index} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer || faq.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 