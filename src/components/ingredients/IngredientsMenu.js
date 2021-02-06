import styled from 'styled-components';
import backgroundPhoto from '../../images/backgroundPizza.png';
import Sauce from './Sauce';
import Cheese from './Cheese';
import Meat from './Meat';
import Other from './Other';

const IngredientsMenu = ({ chosen, setChosen }) => {
  return (
    <Container>
      <Ingredients>
        <Sauce chosen={chosen} setChosen={setChosen} />
        <Cheese chosen={chosen} setChosen={setChosen} />
        <Meat chosen={chosen} setChosen={setChosen} />
        <Other chosen={chosen} setChosen={setChosen} />
      </Ingredients>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;

  background-image: url(${backgroundPhoto});
  background-repeat: inherit;
  background-size: 100%;
`;

const Ingredients = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 88rem;
  max-width: 90vw;

  color: white;

  @media (max-width: 768px) {
    background-repeat: repeat-y;
  }
`;

export default IngredientsMenu;
