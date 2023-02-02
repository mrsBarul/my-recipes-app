import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import RecipesComponent from './RecipesComponent';
import btnSearch from './btnSearch.png'


function App() {

  const ID = '83f60b0a';
  const KEY = '3f9b2bf9e4e654a6be5b83911a4a7b2f';

  const [search, setSearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSearch, setWordSearch] = useState('bread')
  

  useEffect(() => {
    const searchRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ wordSearch }&app_id=${ ID }&app_key=${ KEY }`);
      const data = await response.json();
      setMyRecipes(data.hits)
      console.log(data.hits)
    } 
    searchRecipes()
  }, [wordSearch]) 

  const inputValue = (e) => {
    setSearch(e.target.value)
  }

  const enterSearch = (e) => {
    e.preventDefault()
    setWordSearch(search)
  }

  return (
    <div className="App">
      <Header/>
      <div className='containerInput' onSubmit={ enterSearch }>
        <input onChange={ inputValue } placeholder='Search...' value={ search }/>
        <button onClick={ enterSearch }><img className='btnSearchImage' src={ btnSearch } alt='btnSearch'/></button>
      </div>
      <div className='container'>
        {myRecipes.map((item, index) => (
          <RecipesComponent key={ index }
          name={ item.recipe.label }
          image={ item.recipe.image }
          ingredients={ item.recipe.ingredientLines }
          fat={ item.recipe.totalNutrients.FAT.quantity }
          protein={ item.recipe.totalNutrients.PROCNT.quantity }
          cabs={ item.recipe.totalNutrients.CHOCDF.quantity }
          calories={ item.recipe.calories }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
