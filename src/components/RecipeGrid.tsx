import { useState } from 'react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';
import RecipeCard from './RecipeCard';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { motion, AnimatePresence } from 'motion/react';

interface RecipeGridProps {
  onRecipeClick: (recipe: Recipe) => void;
}

const categories = ['הכל', 'עוגות', 'עוגיות', 'קינוחי כוסות', 'מאפים', 'שוקולד'];

export default function RecipeGrid({ onRecipeClick }: RecipeGridProps) {
  const [activeCategory, setActiveCategory] = useState('הכל');

  const filteredRecipes = activeCategory === 'הכל' 
    ? recipes 
    : recipes.filter(r => r.category === activeCategory);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">המתכונים שלנו</h2>
          <p className="text-slate-500">בחרו את הקטגוריה האהובה עליכם והתחילו לאפות</p>
        </div>
        
        <Tabs defaultValue="הכל" className="w-full md:w-auto" onValueChange={setActiveCategory}>
          <TabsList className="bg-white p-1 rounded-full shadow-sm border border-brand-100 flex flex-wrap h-auto">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="rounded-full px-6 data-[state=active]:bg-brand-500 data-[state=active]:text-white transition-all"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <RecipeCard recipe={recipe} onClick={onRecipeClick} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredRecipes.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">לא נמצאו מתכונים בקטגוריה זו עדיין...</p>
        </div>
      )}
    </section>
  );
}
