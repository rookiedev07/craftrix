import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-foreground">
          Multimodal RAG Prototype
        </h1>
      </div>
    </header>
  );
};

export default Header;