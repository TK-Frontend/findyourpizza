import { ThemeContext, themes } from './contexts/ThemeContext'
import { SelectedIngredientsProvider } from "./contexts/SelectedIngredientsContext";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./layout/Navbar";
import IngredientCategories from "./layout/IngredientCategories"
import SelectedPizzas from "./layout/SelectedPizzas";
import Footer from './layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <SelectedIngredientsProvider>
          <ThemeContext.Provider value={themes.light}>
            <IngredientCategories />
          </ThemeContext.Provider >
          <SelectedPizzas />
        </SelectedIngredientsProvider>
        <Footer />
        <Switch>
          <Route path="*">
            {" "}
            <Redirect to="/" />{" "}
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  `;

export default App;
