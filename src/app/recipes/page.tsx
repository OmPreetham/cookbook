import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import RecipeCard from '@/components/RecipeCard'

import { recipes } from '@/data/recipes'

export default function page() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mt-12 mb-8">
            Our Delicious Recipes
          </h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
