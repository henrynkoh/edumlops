# EduMLOps

EduMLOps is a Next.js-based platform for customized AI and MLOps education, leveraging a Model Context Platform (MCP) to manage contextual data for AI models. Inspired by VESSL AI, TrueFoundry, and Databricks, it offers interactive training pipelines, n8n workflow automation, and AI-driven tutoring for practical learning.

## Features

- **Interactive Training Pipelines**: Build and train AI models with a user-friendly UI, inspired by VESSL AI's Pipeline UI.
- **Model Context Platform (MCP)**: Manage knowledge bases for retrieval-augmented generation (RAG) and personalized AI tutoring.
- **n8n Workflow Automation**: Automate class scheduling, assignment grading, and feedback loops.
- **Real-Time Dashboards**: Track student progress and model performance with interactive visualizations.
- **AI-Driven Learning**: Personalized tutoring with context-aware responses.
- **Customized Learning Paths**: Adaptive modules based on student performance and MCP context.

## Project Structure

```
edumlops/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── context/              # MCP UI
│   │   ├── courses/              # Courses pages
│   │   ├── dashboard/            # Dashboard pages
│   │   ├── pipelines/            # Pipeline UI
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # UI components
│   │   ├── ui/                   # Shared UI components
│   │   ├── Footer.tsx            # Footer component
│   │   └── Navbar.tsx            # Navigation component
│   ├── lib/                      # Utilities
│   │   └── mcp.ts                # Model Context Platform library
│   └── styles/                   # CSS files
│       └── globals.css           # Global styles with Tailwind
├── public/                       # Static assets
├── .gitignore                    # Git ignore file
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Tech Stack

- **Frontend**: Next.js 14.x (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **APIs**: (Future integrations)
  - n8n for workflow automation
  - Pinecone for vector database (planned)
  - MLflow for experiment tracking (planned)
  - LlamaIndex for RAG integration (planned)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/edumlops.git
   cd edumlops
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Model Context Platform (MCP)

The Model Context Platform (MCP) is a system for managing contextual data for AI models, particularly for:

1. **Storing and Managing Contextual Data**: Knowledge bases, datasets, and embeddings for LLMs and RAG systems.
2. **Query Processing**: Efficient retrieval of relevant context for AI model responses (e.g., educational Q&A).
3. **Personalization**: Tailoring AI tutor responses based on student context (e.g., progress, preferences).
4. **Integration with RAG**: Enhancing model outputs with retrieved context, critical for educational content delivery.

## Inspired By

- **VESSL AI**: Pipeline UI, Hyperpocket for multi-agent infrastructure
- **TrueFoundry**: Kubernetes-native deployment, observability
- **Databricks**: MLflow integration, LLM pipelines

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- The open-source community for inspiration and tools 