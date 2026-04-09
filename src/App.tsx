/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import AIRecipeAssistant from './components/AIRecipeAssistant';
import { Recipe } from './types';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onAiAssistantClick={() => setIsAiAssistantOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <RecipeGrid onRecipeClick={(recipe) => setSelectedRecipe(recipe)} />
      </main>

      <footer className="bg-brand-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-500 p-2 rounded-xl">
                  <Heart className="h-6 w-6 text-white fill-current" />
                </div>
                <span className="text-2xl font-bold font-serif tracking-tight">מתוקים בלב</span>
              </div>
              <p className="text-brand-100/60 max-w-md leading-relaxed mb-8">
                אנחנו מאמינים שכל אחד יכול לאפות קינוחים מדהימים. המשימה שלנו היא להנגיש את עולם האפייה לכולם, עם מתכונים מדויקים, טיפים מקצועיים והמון אהבה.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">ניווט מהיר</h4>
              <ul className="space-y-4 text-brand-100/60">
                <li><a href="#" className="hover:text-white transition-colors">כל המתכונים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">עוגות יום הולדת</a></li>
                <li><a href="#" className="hover:text-white transition-colors">קינוחים טבעוניים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">סדנאות אפייה</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">צרו קשר</h4>
              <ul className="space-y-4 text-brand-100/60">
                <li>רחוב הקינוחים 12, תל אביב</li>
                <li>03-1234567</li>
                <li>hello@sweetheart.co.il</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-brand-100/40 text-sm">
            <p>© {new Date().getFullYear()} מתוקים בלב. כל הזכויות שמורות. נבנה באהבה לאופים חובבים.</p>
          </div>
        </div>
      </footer>

      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={!!selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />

      <AIRecipeAssistant 
        isOpen={isAiAssistantOpen} 
        onClose={() => setIsAiAssistantOpen(false)} 
      />
    </div>
  );
}
