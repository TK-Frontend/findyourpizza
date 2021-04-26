import styled from 'styled-components';

const ButtonsOfIngredients = styled.button`
  display: flex;
  background-color: ${({ active }) => (active ? '#252525' : '#ffffff')};
  color: ${({ active }) => (active ? '#ffffff' : '#252525')};
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

export default ButtonsOfIngredients;
