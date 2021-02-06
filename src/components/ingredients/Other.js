import { useState } from 'react';
import styled from 'styled-components';
import other from '../../images/other.png';
import uuid from 'react-uuid';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Other = ({ chosen, setChosen }) => {
  const [ingredients, setIngredients] = useState([
    { name: 'pineapple', key: uuid(), index: 0, active: false },
    { name: 'corn', key: uuid(), index: 1, active: false },
    { name: 'green pepper', key: uuid(), index: 2, active: false },
    { name: 'rocket', key: uuid(), index: 3, active: false },
    { name: 'mushrooms', key: uuid(), index: 4, active: false },
    { name: 'red onion', key: uuid(), index: 5, active: false },
    { name: 'black olives', key: uuid(), index: 6, active: false },
    { name: 'pepper mix', key: uuid(), index: 7, active: false },
    { name: 'cherry tomatoes', key: uuid(), index: 8, active: false },
    { name: 'jalapenos', key: uuid(), index: 9, active: false },
    { name: 'tomatoes', key: uuid(), index: 10, active: false },
    { name: 'spinach leaves', key: uuid(), index: 11, active: false },
  ]);

  const toggleActive = (e) => {
    const idx = parseInt(e.target.value);
    setIngredients(
      [...ingredients],
      (ingredients[idx]['active'] = !ingredients[idx]['active'])
    );
  };

  const toggleChosen = (e) => {
    const idx = parseInt(e.target.value);
    const name = ingredients[idx].name;

    if (ingredients[idx]['active'] && !chosen.includes(name)) {
      setChosen([...chosen, name]);
    } else if (!ingredients[idx]['active'] && chosen.includes(name)) {
      const result = chosen.filter((word) => !word.includes(name));
      setChosen(result);
    }
  };
  return (
    <Others>
      <h1>
        Other <img src={other} alt='other' />
      </h1>
      <OthersButtons>
        {ingredients.map((ingredient) => {
          return (
            <ButtonsOfIngredients
              index={ingredient.index}
              active={ingredient.active}
              key={ingredient.key}
              onClick={(e) => {
                toggleActive(e);
                toggleChosen(e);
              }}
              value={ingredient.index}
            >
              {ingredient.name}
            </ButtonsOfIngredients>
          );
        })}
      </OthersButtons>
    </Others>
  );
};

const Others = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;

  button {
    display: flex;
    flex-direction: column;
  }

  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

const OthersButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Other;
