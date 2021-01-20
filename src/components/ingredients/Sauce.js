import { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import sauce from '../../images/sauce.png';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Sauce = ({ chosen, setChosen }) => {
  const [ingredients, setIngredients] = useState([
    { name: 'tomato', key: uuid(), index: 0, active: false },
    { name: 'white', key: uuid(), index: 1, active: false },
    { name: 'BBQ', key: uuid(), index: 2, active: false },
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
    <Sauces>
      <h1>
        Sauce <img src={sauce} alt='sauce' />
      </h1>

      {
        <SauceButtons>
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
        </SauceButtons>
      }
    </Sauces>
  );
};

const Sauces = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  align-items: center;
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

const SauceButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Sauce;
