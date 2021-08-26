const IsEveryIngredient = (array, searchElements) =>
    searchElements.every((el) => {
        return array.match(new RegExp(el));
    })

export default IsEveryIngredient