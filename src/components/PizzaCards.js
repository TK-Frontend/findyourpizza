import styled from "styled-components";
import blackboardPattern from "../assets/images/bgImages/blackboard.png";
import FilteredRecipes from "../utils/FilteredRecipes";

const PizzaCards = () => {
  const result = FilteredRecipes()

  return (
    <>
      {
        (<Container>
          {result.filteredRecipes.map((recipe) => {
            return (
              <Card key={recipe.name}>
                <img src={recipe.image} alt={recipe.name} className="imageOfPizza" />
                <h1 className="name">{recipe.name}</h1>
                <h2 className="igt">{recipe.ingredients.join(', ')}</h2>
              </Card>
            )
          })
          }
        </Container>
        )
      }
    </>
  );
};

const Container = styled.div`
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  max-width: 88rem;
  height: auto;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 0px;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 1rem 0px;
  }  
  @media (max-width: 496px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`

const Card = styled.div`
  background-image: url(${blackboardPattern});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 28rem;
  height: 12rem;
  border-radius: 15px;
  transition: ease background-image 250ms;
  
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . name name name name name name name name name name name name ."
  "img img img img img img img img . name name name name name name name name name name name name ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . igt igt igt igt igt igt igt igt igt igt igt igt ."
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . . . . . . . . . . . . . ."
  "img img img img img img img img . . . . . . . . . . . . . .";
  
  @media (max-width: 496px) {
  width: 18rem;
  height: 7.8rem;
  }
  @media (max-width: 318px) {
  width: 14rem;
  height: 6rem;
  }

  .imageOfPizza {
    grid-area: img;
    align-self: center;
    justify-self: center;
  }

  .name {
    grid-area: name;
    color: white;
    border-bottom: 2px dashed white;
    font-family: "Archistico Bold";
    font-size: 1.7rem;
    @media (max-width: 496px) {
      font-size: 1rem; 
  }  
    @media (max-width: 318px) {
      font-size: 0.78rem; 
  }
  }

  .igt {   
    padding-top: 5px;
    grid-area: igt;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    align-self: start;
    @media (max-width: 496px) {
      font-size: 0.48rem; 
  }
    @media (max-width: 318px) {
      font-size: 0.38rem; 
  }
  }

  img {
    max-width: 82%;
    height: auto;
  }
`;

export default PizzaCards;
