import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFileContext } from '@/contexts/FileContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FileUpload: React.FC = () => {
  const { addFile } = useFileContext();
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      for (const file of acceptedFiles) {
        if (file.type === 'application/pdf') {
          await addFile(file);
        }
      }
      setIsDragActive(false);
    },
    [addFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: true,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4"
    >
      <Card
        {...getRootProps()}
        className={`relative cursor-pointer transition-all duration-300 ${
          isDragActive
            ? 'border-upload-border bg-upload-area scale-[1.02]'
            : 'border-dashed border-border hover:border-upload-border hover:bg-upload-area'
        }`}
      >
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <motion.div
            animate={{
              scale: isDragActive ? 1.1 : 1,
              rotate: isDragActive ? 10 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Upload className="w-10 h-10 text-muted-foreground mb-4" />
          </motion.div>
          
          <h3 className="text-lg font-medium text-foreground mb-2">
            Upload PDF Documents
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop PDF files here, or click to browse
          </p>
          
          <Button variant="outline" size="sm">
            <File className="w-4 h-4 mr-2" />
            Choose Files
          </Button>
          
          <input {...getInputProps()} />
        </div>
      </Card>
    </motion.div>
  );
};

export default FileUpload;