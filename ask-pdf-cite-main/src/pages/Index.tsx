import React from 'react';
import { FileProvider } from '@/contexts/FileContext';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';
import FileList from '@/components/FileList';
import ChatInterface from '@/components/ChatInterface';
import PDFViewer from '@/components/PDFViewer';

const Index = () => {
  return (
    <FileProvider>
      <div className="h-screen flex flex-col bg-gradient-subtle">
        <Header />
        
        <main className="flex-1 flex overflow-hidden">
          {/* Left Panel - Chat Interface */}
          <div className="w-1/2 border-r border-border bg-background flex flex-col">
            <FileUpload />
            <FileList />
            <div className="flex-1 min-h-0">
              <ChatInterface />
            </div>
          </div>
          
          {/* Right Panel - PDF Viewer */}
          <div className="w-1/2 bg-background">
            <PDFViewer />
          </div>
        </main>
      </div>
    </FileProvider>
  );
};

export default Index;