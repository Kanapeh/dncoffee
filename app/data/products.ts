export interface Product {
  id: string;
  name: string;
  price?: number;
  category: 'hot' | 'cold' | 'coldbrew' | 'drip' | 'breakfast' | 'muffin' | 'dessert';
  image?: string;
  description?: string;
  featured?: boolean;
  origin?: string;
  brewingMethod?: string;
}

export const products: Product[] = [
  // Hot Drinks
  { 
    id: '1', 
    name: 'Espresso', 
    price: 2.50, 
    category: 'hot',
    description: 'Rich and bold, our signature espresso',
    featured: true
  },
  { 
    id: '2', 
    name: 'Cappuccino', 
    price: 3.75, 
    category: 'hot',
    description: 'Perfect balance of espresso, steamed milk, and foam'
  },
  { 
    id: '3', 
    name: 'Latte', 
    price: 4.00, 
    category: 'hot',
    description: 'Smooth espresso with velvety steamed milk'
  },
  { 
    id: '4', 
    name: 'Americano', 
    price: 3.00, 
    category: 'hot',
    description: 'Espresso with hot water for a smooth taste'
  },
  { 
    id: '5', 
    name: 'Mocha', 
    price: 4.50, 
    category: 'hot',
    description: 'Espresso with chocolate and steamed milk',
    featured: true
  },
  { 
    id: '6', 
    name: 'Macchiato', 
    price: 3.50, 
    category: 'hot',
    description: 'Espresso with a dollop of foamed milk'
  },
  
  // Cold Drinks
  { 
    id: '7', 
    name: 'Iced Coffee', 
    price: 3.50, 
    category: 'cold',
    description: 'Refreshing cold brew coffee'
  },
  { 
    id: '8', 
    name: 'Cold Brew', 
    price: 4.00, 
    category: 'coldbrew',
    description: 'Smooth and naturally sweet cold brew, steeped for 24 hours',
    featured: true,
    origin: 'Sweden',
    brewingMethod: 'Cold Steep - Tehran'
  },
  { 
    id: '9', 
    name: 'Iced Latte', 
    price: 4.25, 
    category: 'cold',
    description: 'Espresso with cold milk over ice'
  },
  { 
    id: '10', 
    name: 'Frappuccino', 
    price: 5.00, 
    category: 'cold',
    description: 'Blended coffee drink with ice'
  },
  
  // Breakfast
  { 
    id: '11', 
    name: 'Croissant', 
    price: 3.50, 
    category: 'breakfast',
    description: 'Buttery French croissant'
  },
  { 
    id: '12', 
    name: 'Avocado Toast', 
    price: 6.50, 
    category: 'breakfast',
    description: 'Sourdough with avocado and seasonings',
    featured: true
  },
  { 
    id: '13', 
    name: 'Bagel & Cream Cheese', 
    price: 4.00, 
    category: 'breakfast',
    description: 'Fresh bagel with cream cheese'
  },
  
  // Muffins
  { 
    id: '14', 
    name: 'Blueberry Muffin', 
    price: 3.25, 
    category: 'muffin',
    description: 'Fresh baked with real blueberries'
  },
  { 
    id: '15', 
    name: 'Chocolate Chip Muffin', 
    price: 3.50, 
    category: 'muffin',
    description: 'Loaded with chocolate chips'
  },
  { 
    id: '16', 
    name: 'Banana Nut Muffin', 
    price: 3.75, 
    category: 'muffin',
    description: 'Moist banana muffin with walnuts'
  },
  
  // Desserts
  { 
    id: '17', 
    name: 'Chocolate Cake', 
    price: 5.50, 
    category: 'dessert',
    description: 'Rich chocolate layer cake',
    featured: true
  },
  { 
    id: '18', 
    name: 'Cheesecake', 
    price: 5.75, 
    category: 'dessert',
    description: 'Creamy New York style cheesecake'
  },
  
  // Cold Brew Varieties
  { 
    id: '19', 
    name: 'Classic Cold Brew', 
    price: 4.50, 
    category: 'coldbrew',
    description: 'Traditional cold brew with rich, smooth flavor',
    origin: 'Sweden',
    brewingMethod: 'Cold Steep - Tehran',
    featured: true
  },
  { 
    id: '20', 
    name: 'Nitro Cold Brew', 
    price: 5.00, 
    category: 'coldbrew',
    description: 'Cold brew infused with nitrogen for a creamy texture',
    origin: 'Sweden',
    brewingMethod: 'Cold Steep - Tehran'
  },
  { 
    id: '21', 
    name: 'Vanilla Cold Brew', 
    price: 4.75, 
    category: 'coldbrew',
    description: 'Cold brew with natural vanilla extract',
    origin: 'Sweden',
    brewingMethod: 'Cold Steep - Tehran'
  },
  
  // Drip Coffee
  { 
    id: '22', 
    name: 'Ethiopian Drip Coffee', 
    price: 3.50, 
    category: 'drip',
    description: 'Traditional Ethiopian single-origin drip coffee',
    origin: 'Sweden',
    brewingMethod: 'Drip - Tehran',
    featured: true
  },
  { 
    id: '23', 
    name: 'Colombian Drip Coffee', 
    price: 3.75, 
    category: 'drip',
    description: 'Smooth and balanced Colombian drip coffee',
    origin: 'Sweden',
    brewingMethod: 'Drip - Tehran'
  },
  { 
    id: '24', 
    name: 'Brazilian Drip Coffee', 
    price: 3.50, 
    category: 'drip',
    description: 'Rich and nutty Brazilian drip coffee',
    origin: 'Sweden',
    brewingMethod: 'Drip - Tehran'
  },
  { 
    id: '25', 
    name: 'Kenyan Drip Coffee', 
    price: 4.00, 
    category: 'drip',
    description: 'Bright and fruity Kenyan single-origin drip',
    origin: 'Sweden',
    brewingMethod: 'Drip - Tehran'
  },
];
