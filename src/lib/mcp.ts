/**
 * Model Context Platform (MCP) Core Library
 * 
 * This library provides functions for managing contextual data for AI models,
 * particularly for Retrieval-Augmented Generation (RAG) workflows.
 */

export type ContextMetadata = {
  id: string;
  title: string;
  type: 'course' | 'reference' | 'tutorial' | 'documentation' | string;
  description?: string;
  source?: string;
  createdAt: Date;
  updatedAt?: Date;
  tags: string[];
  size: number; // in bytes
};

export type ContextDocument = {
  metadata: ContextMetadata;
  content: string;
  chunks?: ContextChunk[];
};

export type ContextChunk = {
  id: string;
  content: string;
  metadata: {
    sourceDocumentId: string;
    chunkIndex: number;
    embedding?: number[]; // Vector embedding
  };
};

export type ContextQuery = {
  query: string;
  filters?: {
    type?: string[];
    tags?: string[];
    source?: string;
    dateRange?: {
      start?: Date;
      end?: Date;
    };
  };
  limit?: number;
};

// Mock context data store (in a real app, this would be a database)
const contextStore: Record<string, ContextDocument> = {};

/**
 * Store a new context document
 */
export async function storeContext(
  content: string,
  metadata: Omit<ContextMetadata, 'id' | 'createdAt' | 'size'>
): Promise<{ id: string; success: boolean }> {
  const id = `ctx_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  
  const contextDoc: ContextDocument = {
    metadata: {
      id,
      createdAt: new Date(),
      size: new TextEncoder().encode(content).length,
      ...metadata,
    },
    content,
  };
  
  // In a real app, save to database
  contextStore[id] = contextDoc;
  
  return {
    id,
    success: true,
  };
}

/**
 * Retrieve a context document by ID
 */
export async function getContext(id: string): Promise<ContextDocument | null> {
  return contextStore[id] || null;
}

/**
 * Search for relevant context based on a query
 * Note: This is a simple mock. In a real app, this would use 
 * vector similarity search (e.g., with Pinecone, Weaviate, etc.)
 */
export async function searchContext(
  queryOptions: ContextQuery
): Promise<ContextChunk[]> {
  // This is a mock implementation
  // In a real app, would connect to a vector database
  
  // For now, just return mock results
  const mockResults: ContextChunk[] = Object.values(contextStore)
    .filter(doc => {
      // Apply filters
      if (queryOptions.filters?.type && 
          !queryOptions.filters.type.includes(doc.metadata.type)) {
        return false;
      }
      
      if (queryOptions.filters?.tags && 
          !queryOptions.filters.tags.some(tag => doc.metadata.tags.includes(tag))) {
        return false;
      }
      
      // Simple text match (in reality, would use vector similarity)
      return doc.content.toLowerCase().includes(queryOptions.query.toLowerCase());
    })
    .map(doc => ({
      id: `chunk_${doc.metadata.id}_0`,
      content: doc.content.substring(0, 500) + '...',
      metadata: {
        sourceDocumentId: doc.metadata.id,
        chunkIndex: 0,
      }
    }))
    .slice(0, queryOptions.limit || 5);
  
  return mockResults;
}

/**
 * Generate chunks from a document for more efficient retrieval
 */
export function chunkDocument(
  document: ContextDocument, 
  chunkSize: number = 500
): ContextDocument {
  const content = document.content;
  const chunks: ContextChunk[] = [];
  
  // Simple chunking by character count
  // In a real app, would use more sophisticated chunking
  for (let i = 0; i < content.length; i += chunkSize) {
    const chunkContent = content.substring(i, i + chunkSize);
    chunks.push({
      id: `chunk_${document.metadata.id}_${chunks.length}`,
      content: chunkContent,
      metadata: {
        sourceDocumentId: document.metadata.id,
        chunkIndex: chunks.length,
      }
    });
  }
  
  return {
    ...document,
    chunks,
  };
}

/**
 * Get statistics about stored context
 */
export function getContextStats(): {
  totalDocuments: number;
  totalSize: number;
  typeBreakdown: Record<string, number>;
} {
  const documents = Object.values(contextStore);
  
  const typeBreakdown: Record<string, number> = {};
  let totalSize = 0;
  
  documents.forEach(doc => {
    const type = doc.metadata.type;
    typeBreakdown[type] = (typeBreakdown[type] || 0) + 1;
    totalSize += doc.metadata.size;
  });
  
  return {
    totalDocuments: documents.length,
    totalSize,
    typeBreakdown,
  };
} 