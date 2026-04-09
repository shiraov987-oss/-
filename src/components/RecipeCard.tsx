import { Clock, ChefHat, Star } from 'lucide-react';
import { Recipe } from '../types';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { motion } from 'motion/react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(recipe)}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-none recipe-card-shadow h-full flex flex-col group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge className="bg-white/90 text-brand-700 hover:bg-white border-none backdrop-blur-sm">
              {recipe.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5 flex-grow">
          <div className="flex items-center gap-1 text-amber-500 mb-2">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs text-slate-400 mr-1">(48 ביקורות)</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </CardContent>
        <CardFooter className="px-5 py-4 border-t border-slate-50 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Clock className="h-4 w-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
