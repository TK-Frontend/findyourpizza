import { createContext, useState } from 'react'

export const SelectedIngredientsContext = createContext()
export const SelectedIngredientsProvider = ({ children }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([])
    return (
        <SelectedIngredientsContext.Provider value={[selectedIngredients, setSelectedIngredients]}>
            {children}
        </SelectedIngredientsContext.Provider>
    )
}
