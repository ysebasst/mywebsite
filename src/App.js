import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./Global.styles";

import { Header, Footer } from "./components";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/acerca-de-mi" component={AboutMe} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
