import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Home = () => {
  return(
    <h1>This is Home page</h1>
  )
}
const About = () => {
  return(
    <h1>This is About page</h1>
  )
}
const Projects = ({match}) => {
  return(
    <div>
    <h1>This is Projects page</h1>
    
      <ul>
      <li>
      <Link to={`${match.url}/project1`}>Project 1</Link>
      </li>
      <li>
      <Link to={`${match.url}/project2`}>Project 2</Link>
      </li>
      <li>
      <Link to={`${match.url}/project3`}>Project 3</Link>
      </li>
      <li>
      <Link to={`${match.url}/project4`}>Project 4</Link>
      </li>
      </ul>
      {/* routeissa match.path. linkeissä match.url */}
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {' '}
            <h3> {match.params.name} </h3>
          </div>
        )
        }
        />
        {/* toinen tapa. renderöidään uusi komponentti sisälle */}
      <Route path={`${match.path}/:name`} render={(props) => <Project{...props}/>}/>
    </div>
  )
}
// propsit renderillä
const Project = ({match}) =>{
  return(
    <div>
      <h3>Project page {match.params.name}</h3>
    </div>
  )
}

const Nav = () => {
  return(
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
    <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
