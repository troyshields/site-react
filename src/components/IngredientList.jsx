export default function IngredientList(props) {
  
  const ingredientsListItems = props.ingredients.map((ingredient) => {
    
    return (
      <li key={ingredient}>{ingredient}</li>
    )
  })

  return (
    
      <section className='main-body'>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

          {props.ingredients.length > 3 ?
          <div className="get-recipe-container">
              <div className="get-recipe-inner" ref={props.ref}>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.toggle}>
                Get a recipe
              </button>
          </div>
          : null}

      </section>

  )
}