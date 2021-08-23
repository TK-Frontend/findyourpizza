const ToggleSelected = ({ ingredient, selectedIngredients, setSelectedIngredients }) => {
    if (ingredient.active && !selectedIngredients.includes(ingredient)) {
        setSelectedIngredients([...selectedIngredients, ingredient])
    } else if (!ingredient.active && selectedIngredients.includes(ingredient)) {
        const filtered = [...selectedIngredients].filter((ingredient) => {
            return ingredient.active
        })
        setSelectedIngredients(filtered)
    }
};

export default ToggleSelected