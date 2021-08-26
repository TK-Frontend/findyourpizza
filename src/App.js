import { ThemeContext, themes } from './context/ThemeContext'
import { SelectedIngredientsProvider } from "./context/SelectedIngredientsContext";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./layout/Navbar";
import IngredientCategories from "./layout/IngredientCategories"
import SelectedPizzas from "./layout/SelectedPizzas";
import Footer from './layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themes.light}>
        <SelectedIngredientsProvider>
          <Container>
            <Navbar />
            <IngredientCategories />
            <SelectedPizzas />
            <Footer />
            <Switch>
              <Route path="*">
                {" "}
                <Redirect to="/findyourpizza" />{" "}
              </Route>
            </Switch>
          </Container>
        </SelectedIngredientsProvider>
      </ThemeContext.Provider >
    </BrowserRouter>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  `;

export default App;
