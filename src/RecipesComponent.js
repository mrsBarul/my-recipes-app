import done from './done.png'


function RecipesComponent ({ name, image, ingredients, fat, protein, cabs, calories}) {
    return(
        <div className="recipeContainer">
            <div className='recipe'>
                <h2>{ name }</h2>
                <div className='recipeItem'>
                    <div className='recipeImage'>
                        <img src={ image } alt='food' className="image"/>
                    </div>
                    <div className='dataRecipe'>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={ index }><img src={ done } alt='done'/>    { ingredient }</li>
                            ))}
                        </ul>
                    </div>
                    <div className='containerNutrition'>
                        <div className='nutrition'>
                            <h3>Fat</h3>
                            <p>{ fat.toFixed() } g</p>
                        </div>
                        <div className='nutrition'>
                            <h3>Protein</h3>
                            <p>{ protein.toFixed() } g</p>
                        </div>
                        <div className='nutrition'>
                            <h3>Cabs</h3>
                            <p>{ cabs.toFixed() } g</p>
                        </div>
                        <div className='nutrition'>
                            <h3>Calories</h3>
                            <p>{ calories.toFixed() } kc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesComponent;