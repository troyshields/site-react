import { useState, useEffect, useRef } from 'react'
import '../styles/RecipeGenerator.css'
import Recipe from '../components/Recipe.jsx'
import IngredientList from '../components/IngredientList.jsx'

export default function RecipeGenerator()  {

  const [ingredients, setIngredients] = useState([
    "all the main spices", 
    "pasta", 
    "ground beef", 
    "tomato paste",
  ])

  const addIngredient = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const newIngredient = formData.get('ingredient');

    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset(); // Clear the input field
    }
  }

  const [recipeShown, setRecipeShown] = useState(false)

  const toggleRecipeShown = () => {
    setRecipeShown((prevShown) => !prevShown);
  }

  const recipeSection = useRef(null)
  // console.log(recipeSection)

  useEffect(() => {
    if (recipeShown && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipeShown]);


  return (

    <>
      <h1>Recipe Generator</h1>
      
      <div className="recipe-generator">
        <form onSubmit={addIngredient} className='form-add-ingredient'>
          <input 
              type="text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name="ingredient"
              id="ingredientInput"
          />
          <button type="submit">Add ingredient</button>
        </form>

        {ingredients.length > 0 ?
        <IngredientList 
          ingredients={ingredients} 
          toggle={toggleRecipeShown}
          ref={recipeSection} />
        : null}

        {recipeShown && 
          <Recipe />
        }
      </div>
    </>
  )
}