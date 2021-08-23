const ToggleColors = ({ ingredient, listOfIngredients, setListOfIngredients, }) => {
    setListOfIngredients(
        [...listOfIngredients],
        ingredient.active = !ingredient.active
    )
};

export default ToggleColors