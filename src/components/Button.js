import styled from "styled-components";
import ToggleSelected from '../utils/ToggleSelected'
import ToggleColors from "../utils/ToggleColors";
import { useContext } from "react";
import { SelectedIngredientsContext } from "../contexts/SelectedIngredientsContext";
import { themes } from '../contexts/ThemeContext';

const Button = ({ listOfIngredients, setListOfIngredients, categoryName, categoryImage }) => {
  const [selectedIngredients, setSelectedIngredients] = useContext(SelectedIngredientsContext)

  return (
    <>
      <h1>
        {categoryName} <img src={categoryImage} alt={categoryName} />
      </h1>
      <Buttons>
        {listOfIngredients.map((ingredient) => {
          return (
            <IngredientButton
              active={ingredient.active}
              key={ingredient.key}
              onClick={() => {
                ToggleColors({ ingredient, listOfIngredients, setListOfIngredients })
                ToggleSelected({ ingredient, selectedIngredients, setSelectedIngredients })
              }
              }
            >
              {ingredient.name}
            </IngredientButton>
          );
        })}
      </Buttons>
    </>
  )
}

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IngredientButton = styled.button`
  display: flex;
  color: ${({ active }) => (active ? themes.light.color : themes.dark.color)};
  background-color: ${({ active }) => (active ? themes.dark.color : themes.light.color)};
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: 0;
  margin: 3px;
  list-style: none;
  cursor: pointer;
  transition: ease background-color 250ms;
`;

export default Button
