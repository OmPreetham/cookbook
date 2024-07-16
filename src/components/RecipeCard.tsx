import Link from 'next/link'
import { Recipe } from '@/data/recipes'

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          <p className="mt-2">{recipe.description}</p>
        </div>
      </div>
    </Link>
  )
}
