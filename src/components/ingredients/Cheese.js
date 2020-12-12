import styled from 'styled-components';

const Cheese = () => {
  return (
    <Cheeses>
      <h1>Cheese</h1>
    </Cheeses>
  );
};

const Cheeses = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export default Cheese;
