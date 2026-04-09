import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

interface AIRecipeAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIRecipeAssistant({ isOpen, onClose }: AIRecipeAssistantProps) {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (!ingredients.trim()) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      const prompt = `
        אתה שף קינוחים מומחה. המשתמש נותן לך רשימת מצרכים שיש לו בבית: "${ingredients}".
        תבנה לו מתכון לקינוח יצירתי, טעים וקל להכנה המבוסס על המצרכים האלו (אפשר להניח שיש לו גם מצרכי בסיס כמו סוכר, קמח, שמן, ביצים).
        המתכון חייב להיות בעברית.
        מבנה התשובה:
        1. שם הקינוח (כותרת גדולה)
        2. תיאור קצר ומגרה
        3. רשימת מצרכים מסודרת
        4. הוראות הכנה שלב אחר שלב
        5. טיפ לשדרוג
        תשתמש בפורמט Markdown יפה.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setRecipe(response.text || 'לא הצלחתי ליצור מתכון. נסו שוב.');
    } catch (error) {
      console.error('Error generating recipe:', error);
      setRecipe('מצטערים, חלה שגיאה ביצירת המתכון. אנא נסו שוב מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0 overflow-hidden border-none rounded-3xl">
        <DialogHeader className="p-6 bg-brand-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-2 rounded-xl">
              <Sparkles className="h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl font-serif">עוזר המתכונים החכם</DialogTitle>
          </div>
          <DialogDescription className="text-white/80">
            ספרו לי אילו מצרכים יש לכם בבית, ואני אמציא לכם קינוח מושלם!
          </DialogDescription>
        </DialogHeader>

        <div className="flex-grow overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <div className="flex gap-3">
              <Input 
                placeholder="למשל: בננות, שוקולד, ביסקוויטים..." 
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="flex-grow rounded-full border-brand-200 focus-visible:ring-brand-500"
                onKeyDown={(e) => e.key === 'Enter' && generateRecipe()}
              />
              <Button 
                onClick={generateRecipe} 
                disabled={loading || !ingredients.trim()}
                className="bg-brand-500 hover:bg-brand-600 rounded-full px-6"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Wand2 className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-6 bg-slate-50">
            {recipe ? (
              <div className="prose prose-slate max-w-none rtl">
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4 py-12">
                <Sparkles className="h-12 w-12 opacity-20" />
                <p className="text-center max-w-xs">
                  הזינו את המצרכים שלכם למעלה ולחצו על הכפתור כדי להתחיל בקסם
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
