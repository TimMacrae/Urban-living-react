import React from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import ProductsState from "./context/products/ProductsState";

function App() {
  return (
    <ProductsState>
      <Router>
        <div className="App">
          <Navigation></Navigation>

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Products></Products>}
            ></Route>
            <Route
              exact
              path="/products/chairs"
              component={() => <Products category="chair"></Products>}
            ></Route>
            <Route
              exact
              path="/products/couches"
              component={() => <Products category="chouch"></Products>}
            ></Route>
            <Route
              exact
              path="/products/lamps"
              component={() => <Products category="lamp"></Products>}
            ></Route>
            <Route
              exact
              path="/products/tables"
              component={() => <Products category="table"></Products>}
            ></Route>
          </Switch>
        </div>
      </Router>
    </ProductsState>
  );
}

export default App;
