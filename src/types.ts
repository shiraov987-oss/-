export interface Ingredient {
  item: string;
  amount: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'עוגות' | 'עוגיות' | 'קינוחי כוסות' | 'מאפים' | 'שוקולד';
  difficulty: 'קל' | 'בינוני' | 'מאתגר';
  time: string;
  ingredients: Ingredient[];
  instructions: string[];
  tips?: string[];
}
