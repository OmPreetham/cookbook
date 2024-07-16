import MaxWidthWrapper from '@/components/MaxWidthWrapper'

import { recipes, RecipePageProps } from '../../../data/recipes'

const RecipePage: React.FC<RecipePageProps> = ({ params }) => {
  const { id } = params

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mt-12">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mt-8 w-full h-auto"
        />
        <p className="mt-4 text-lg">{recipe.description}</p>
      </div>
    </MaxWidthWrapper>
  )
}

export default RecipePage
