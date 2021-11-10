import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/blog";
//import Login from "./Pages/Login/Login";
import Register from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Survey from "./Components/Survey/Survey";
import Search from "./Pages/Search/Search";
import Diet from "./Pages/Diet/Diet";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/search" component={Search} />

        <Route path="/blog" component={Blog} />

        <Route path="/diet" component={Diet} />

        <Route path="/login" component={Login} />

        <Route path="/signup" component={Register} />

        <Route path="/survey" component={Survey} />
      </Switch>
    </Router>
  );
}

export default App;
