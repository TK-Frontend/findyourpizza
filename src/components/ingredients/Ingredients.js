import styled from 'styled-components';
import backgroundPhoto from '../../images/backgroundPizza.png';
import Sauce from './Sauce';
import Cheese from './Cheese';
import Meet from './Meet';
import Other from './Other';

const Ingredients = () => {
  return (
    <Ings>
      <Sauce />
      <Cheese />
      <Meet />
      <Other />
    </Ings>
  );
};

const Ings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  width: 100vw;
  padding: 1rem;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;

  color: white;
  padding-bottom: 50px;
`;

export default Ingredients;
