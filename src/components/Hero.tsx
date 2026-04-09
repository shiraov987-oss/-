import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-950 leading-tight mb-6">
              הקינוחים הכי <span className="text-brand-500">מתוקים</span> שיש, אצלכם במטבח
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              גלו מאות מתכונים מנצחים, מהקלאסיקות האהובות ועד לקינוחים המודרניים ביותר. 
              הכל עם הסברים פשוטים וטיפים שיבטיחו לכם הצלחה בכל פעם.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white px-8 rounded-full text-lg font-medium shadow-lg shadow-brand-200 transition-all hover:scale-105">
                לכל המתכונים
              </Button>
              <Button size="lg" variant="outline" className="border-brand-300 text-brand-700 hover:bg-brand-50 px-8 rounded-full text-lg font-medium">
                איך זה עובד?
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1000" 
                alt="Featured Dessert" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] -rotate-3">
              <p className="text-brand-500 font-serif font-bold text-xl mb-1">מתכון השבוע</p>
              <p className="text-slate-800 font-bold mb-2">טארט פירות יער</p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-brand-600 hover:text-brand-700 flex items-center gap-1">
                למתכון המלא <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand-300 rounded-full blur-3xl opacity-20" />
    </section>
  );
}
