export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={`${ingredient}-${index}`} className="ingredient-pill">{ingredient}</li>
    ))
    return (
        <section className="pantry-section">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">YOUR PANTRY</p>
                    <h2>Ingredients on hand</h2>
                </div>
                <span className="ingredient-count">{props.ingredients.length} {props.ingredients.length === 1 ? "item" : "items"}</span>
            </div>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <p className="eyebrow">THE GOOD PART</p>
                    <h3>Ready for a recipe?</h3>
                    <p>Let Chef Claude create a delicious plan from your ingredients.</p>
                </div>
                <button type="button" onClick={props.getRecipe}>Create recipe <span aria-hidden="true">→</span></button>
            </div>}
        </section>
    )
}
