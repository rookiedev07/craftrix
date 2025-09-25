import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';
import { useFileContext } from '@/contexts/FileContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

const ChatInterface: React.FC = () => {
  const { messages, addMessage, navigateToCitation, files } = useFileContext();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    addMessage({
      type: 'user',
      content: userQuery,
    });

    try {
      // Simulate API call for now
      setTimeout(() => {
        // Mock response with citations
        const mockResponse = {
          answer: `Based on the uploaded documents, here's what I found regarding "${userQuery}". The information shows relevant details about your query [1]. Additionally, there are supporting details in another section [2].`,
          citations: [
            { id: 1, fileName: files[0]?.name || 'document.pdf', pageNumber: 1, fileId: files[0]?.id || '1' },
            { id: 2, fileName: files[0]?.name || 'document.pdf', pageNumber: 3, fileId: files[0]?.id || '1' },
          ],
        };

        addMessage({
          type: 'system',
          content: mockResponse.answer,
          citations: mockResponse.citations,
        });
        setIsLoading(false);
      }, 2000);

      // TODO: Replace with actual API call
      // const response = await axios.post('/api/query', { query: userQuery });
      // addMessage({
      //   type: 'system',
      //   content: response.data.answer,
      //   citations: response.data.citations,
      // });
    } catch (error) {
      console.error('Query failed:', error);
      addMessage({
        type: 'system',
        content: 'Sorry, I encountered an error while processing your query. Please try again.',
      });
      setIsLoading(false);
    }
  };

  const renderMessageContent = (content: string, citations?: any[]) => {
    if (!citations) return content;

    let processedContent = content;
    citations.forEach((citation) => {
      const citationRegex = new RegExp(`\\[${citation.id}\\]`, 'g');
      processedContent = processedContent.replace(
        citationRegex,
        `<citation data-citation='${JSON.stringify(citation)}'>[${citation.id}]</citation>`
      );
    });

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: processedContent,
        }}
      />
    );
  };

  useEffect(() => {
    // Add click event listeners for citations
    const handleCitationClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'CITATION') {
        const citationData = target.getAttribute('data-citation');
        if (citationData) {
          const citation = JSON.parse(citationData);
          navigateToCitation(citation);
        }
      }
    };

    document.addEventListener('click', handleCitationClick);
    return () => document.removeEventListener('click', handleCitationClick);
  }, [navigateToCitation]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Chat</h2>
      </div>

      <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
        <div className="space-y-4 py-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user'
                        ? 'bg-chat-user text-chat-user-foreground'
                        : 'bg-chat-system text-chat-system-foreground border'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <div
                  className={`flex-1 max-w-[80%] ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-chat-user text-chat-user-foreground'
                        : 'bg-chat-system text-chat-system-foreground border'
                    }`}
                  >
                    <div className="text-sm">
                      {renderMessageContent(message.content, message.citations)}
                    </div>
                  </div>

                  {message.citations && message.citations.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.citations.map((citation) => (
                        <Badge
                          key={citation.id}
                          variant="secondary"
                          className="cursor-pointer hover:bg-citation hover:text-citation-foreground transition-colors"
                          onClick={() => navigateToCitation(citation)}
                        >
                          [{citation.id}] {citation.fileName} - Page {citation.pageNumber}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-chat-system text-chat-system-foreground border flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block p-3 rounded-lg bg-chat-system text-chat-system-foreground border">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your documents..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>

      <style>{`
        citation {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          background: hsl(var(--citation));
          color: hsl(var(--citation-foreground));
          border-radius: 9999px;
          cursor: pointer;
          margin: 0 2px;
          transition: all 0.2s ease;
        }
        citation:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;