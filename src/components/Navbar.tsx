import { Cake, Search, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onAiAssistantClick: () => void;
}

export default function Navbar({ onAiAssistantClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full glass-effect border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded-xl">
              <Cake className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-serif text-brand-900 tracking-tight">מתוקים בלב</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">מתכונים</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">קטגוריות</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">אודות</a>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 border-brand-200 text-brand-700 hover:bg-brand-100"
              onClick={onAiAssistantClick}
            >
              <Sparkles className="h-4 w-4" />
              עוזר המתכונים AI
            </Button>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="חפשו מתכון..." 
                className="pr-10 pl-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-500 transition-all w-32 sm:w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
