import React from 'react';
import styled from 'styled-components';

import backgroundPhoto from '../../images/cardBgImg.png';

const PizzaCard = () => {
  return (
    <Card>
      <h1>sth</h1>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 351px;
  height: 160px;
  border: 1px solid red;
`;
export default PizzaCard;
