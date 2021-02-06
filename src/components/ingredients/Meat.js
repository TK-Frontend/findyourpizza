import { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import meet from '../../images/meet.png';
import ButtonsOfIngredients from './ButtonsOfIngredients';

const Meet = ({ chosen, setChosen }) => {
  const [ingredients, setIngredients] = useState([
    { name: 'ham', key: uuid(), index: 0, active: false },
    { name: 'beef', key: uuid(), index: 1, active: false },
    { name: 'matured ham', key: uuid(), index: 2, active: false },
    { name: 'pepperoni', key: uuid(), index: 3, active: false },
    { name: 'pork', key: uuid(), index: 4, active: false },
    { name: 'chicken', key: uuid(), index: 5, active: false },
    { name: 'bacon', key: uuid(), index: 6, active: false },
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
    <Meets>
      <h1>
        Meat <img src={meet} alt='meet' />
      </h1>
      <MeetButtons>
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
      </MeetButtons>
    </Meets>
  );
};

const Meets = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 36%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

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

const MeetButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Meet;
