import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Recipe } from '../types';
import { Clock, ChefHat, Info, CheckCircle2 } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeModal({ recipe, isOpen, onClose }: RecipeModalProps) {
  if (!recipe) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden border-none rounded-3xl">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="relative h-64 sm:h-80">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6">
              <Badge className="mb-3 bg-brand-500 text-white border-none">{recipe.category}</Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">{recipe.title}</h2>
              <div className="flex gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ChefHat className="h-4 w-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="bg-brand-100 p-1.5 rounded-lg text-brand-600">
                    <Info className="h-5 w-5" />
                  </span>
                  מצרכים
                </h3>
                <ul className="space-y-4">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <span className="text-slate-700">{ing.item}</span>
                      <span className="font-bold text-brand-700 text-sm">{ing.amount}</span>
                    </li>
                  ))}
                </ul>
                
                {recipe.tips && (
                  <div className="mt-10 bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      💡 טיפ מהשף
                    </h4>
                    <ul className="space-y-2">
                      {recipe.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-amber-800 leading-relaxed">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="bg-brand-100 p-1.5 rounded-lg text-brand-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  אופן ההכנה
                </h3>
                <div className="space-y-8">
                  {recipe.instructions.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-100">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
