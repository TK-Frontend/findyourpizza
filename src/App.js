import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="*">
            {" "}
            <Redirect to="/home" />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
