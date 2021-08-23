import "./App.css";
import { ThemeContext, themes } from './Contexts/ThemeContext'
import { SelectedIngredientsProvider } from "./Contexts/SelectedIngredientsContext";
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import CategoriesView from "./Components/Ingredients/CategoriesView";
import BakedPizzas from "./Components/PizzaOven/BakedPizzas";
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <SelectedIngredientsProvider>
          <ThemeContext.Provider value={themes.light}>
            <CategoriesView />
          </ThemeContext.Provider >
          <BakedPizzas />
        </SelectedIngredientsProvider>
        <Footer />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  overflow: auto;
`;

export default App;
