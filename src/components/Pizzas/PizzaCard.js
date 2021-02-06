import React from 'react';
import styled from 'styled-components';

import backgroundPattern from '../../images/cardBgImgNoRad.png';

const PizzaCard = () => {
  return (
    <Card>
      <h1>sth</h1>
    </Card>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  grid-template-rows: repeat(10, 1fr);

  background-image: url(${backgroundPattern});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 484px;
  height: 220px;
  border-radius: 15px;
`;
export default PizzaCard;
