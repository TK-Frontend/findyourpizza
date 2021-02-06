import { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import cheese from '../../images/cheese.png';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Cheese = ({ chosen, setChosen }) => {
  const [ingredients, setIngredients] = useState([
    { name: 'mozarella', key: uuid(), index: 0, active: false },
    { name: 'corregio', key: uuid(), index: 1, active: false },
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
    <Cheeses>
      <h1>
        Cheese <img src={cheese} alt='cheese' />
      </h1>
      <CheeseButtons>
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
      </CheeseButtons>
    </Cheeses>
  );
};

const Cheeses = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 28%;
  align-items: center;
  padding-top: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

const CheeseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Cheese;
