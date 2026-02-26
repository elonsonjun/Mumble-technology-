import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBotResponse } from "@/lib/chatbot-responses";

type Message = { role: "user" | "bot"; text: string };

// Paths and email we turn into clickable links in bot messages (standalone / = home)
const LINK_REGEX = /(\/contact|\/portfolio|\/blog(?:\/[a-z0-9-]+)?|\/services\/[a-z0-9-]+|\/industries\/[a-z0-9-]+|\/featured\/[a-z0-9-]+|pm@mumbletech\.in|(?<=\s)\/(?=[\s\n)]|$))/g;

const WELCOME = "Hello! I'm the Mumble Technology helpline assistant. I can direct you to every page on our site and give detailed explanations of our services, solutions, industries, portfolio, and contact info. Try \"What pages can I visit?\" or \"Tell me about AI\" or \"Contact\".";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: WELCOME }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    const reply = getBotResponse(text);
    setMessages((prev) => [...prev, { role: "bot", text: reply }]);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 left-4 z-[100] flex max-h-[70vh] min-h-[360px] w-auto max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:bottom-28 md:left-auto md:right-8 md:h-[480px] md:min-h-0 md:max-h-none md:w-[380px]"
            style={{ bottom: "max(6rem, calc(env(safe-area-inset-bottom) + 5rem))" }}
          >
            <div className="flex items-center justify-between border-b border-border bg-primary/10 px-4 py-3">
              <span className="font-semibold text-foreground">Helpline</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.role === "user" ? (
                      <p className="whitespace-pre-wrap">{m.text}</p>
                    ) : (
                      <p className="whitespace-pre-wrap">
                        {m.text.split(LINK_REGEX).map((part, i) => {
                          if (!part) return null;
                          if (part === "pm@mumbletech.in")
                            return (
                              <a
                                key={i}
                                href="mailto:pm@mumbletech.in"
                                className="text-primary font-medium underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {part}
                              </a>
                            );
                          if (part.startsWith("/"))
                            return (
                              <Link
                                key={i}
                                to={part}
                                className="text-primary font-medium underline"
                                onClick={() => setOpen(false)}
                              >
                                {part}
                              </Link>
                            );
                          return <span key={i}>{part}</span>;
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, contact..."
                  className="min-h-[48px] flex-1 rounded-xl border-border bg-background text-base"
                />
                <Button type="submit" size="icon" className="h-12 w-12 min-h-[48px] min-w-[48px] shrink-0 rounded-xl">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Or <Link to="/contact" className="text-primary underline" onClick={() => setOpen(false)}>contact us</Link> directly
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="fixed z-[99] flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:bottom-8 md:right-8 md:h-16 md:w-16"
        style={{ right: "max(1.5rem, env(safe-area-inset-right))", bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        aria-label={open ? "Close chat" : "Open helpline chat"}
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </motion.button>
    </>
  );
}
