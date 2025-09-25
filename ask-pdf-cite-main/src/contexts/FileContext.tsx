import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UploadedFile {
  id: string;
  name: string;
  uploadTime: Date;
  status: 'uploading' | 'processing' | 'indexed' | 'error';
  size: number;
  file?: File;
  url?: string;
}

export interface Message {
  id: string;
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
  citations?: Citation[];
}

export interface Citation {
  id: number;
  fileName: string;
  pageNumber: number;
  fileId: string;
}

interface FileContextType {
  files: UploadedFile[];
  messages: Message[];
  activeFile: UploadedFile | null;
  activePage: number;
  addFile: (file: File) => Promise<void>;
  removeFile: (id: string) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setActiveFile: (file: UploadedFile | null) => void;
  setActivePage: (page: number) => void;
  navigateToCitation: (citation: Citation) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};

export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to the Multimodal RAG Prototype! Upload a PDF and ask questions about its content.',
      timestamp: new Date(),
    },
  ]);
  const [activeFile, setActiveFile] = useState<UploadedFile | null>(null);
  const [activePage, setActivePage] = useState<number>(1);

  const addFile = async (file: File) => {
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: file.name,
      uploadTime: new Date(),
      status: 'uploading',
      size: file.size,
      file,
      url: URL.createObjectURL(file),
    };

    setFiles(prev => [...prev, newFile]);

    // Simulate upload process
    setTimeout(() => {
      setFiles(prev =>
        prev.map(f =>
          f.id === newFile.id ? { ...f, status: 'processing' } : f
        )
      );
    }, 1000);

    setTimeout(() => {
      setFiles(prev =>
        prev.map(f =>
          f.id === newFile.id ? { ...f, status: 'indexed' } : f
        )
      );
    }, 3000);

    // Set as active file if it's the first one
    if (files.length === 0) {
      setTimeout(() => setActiveFile(newFile), 100);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => {
      const updatedFiles = prev.filter(f => f.id !== id);
      if (activeFile?.id === id) {
        setActiveFile(updatedFiles.length > 0 ? updatedFiles[0] : null);
      }
      return updatedFiles;
    });
  };

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const navigateToCitation = (citation: Citation) => {
    const file = files.find(f => f.id === citation.fileId);
    if (file) {
      setActiveFile(file);
      setActivePage(citation.pageNumber);
    }
  };

  const value: FileContextType = {
    files,
    messages,
    activeFile,
    activePage,
    addFile,
    removeFile,
    addMessage,
    setActiveFile,
    setActivePage,
    navigateToCitation,
  };

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};