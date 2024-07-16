export interface Recipe {
  id: number
  title: string
  description: string
  image: string
}

export interface RecipePageProps {
  params: {
    id: string // Assuming id is passed as a string from the router
  }
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description:
      'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    image: '/cookbook-preview.jpg',
  },
  {
    id: 2,
    title: 'Chicken Curry',
    description:
      'A flavorful and spicy chicken curry made with a blend of aromatic spices.',
    image: '/cookbook-preview.jpg',
  },
  {
    id: 3,
    title: 'Avocado Toast',
    description:
      'Simple and delicious avocado toast topped with fresh ingredients.',
    image: '/cookbook-preview.jpg',
  },
  // Add more recipes as needed
]
