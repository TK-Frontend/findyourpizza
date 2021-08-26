import { useContext } from "react";
import { SelectedIngredientsContext } from "../context/SelectedIngredientsContext";
import IsEveryIngredient from './IsEveryIngredient'
import Recipes from '../components/Recipes'

const FilteredRecipes = () => {
    const [selectedIngredients] = useContext(SelectedIngredientsContext)
    const mappedSelected = selectedIngredients.map(item => item.name)
    const filteredRecipes = Recipes.filter(recipe => (IsEveryIngredient(recipe.ingredients.join(', '), mappedSelected)))
    return ({ filteredRecipes })
}

export default FilteredRecipes
