import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import MyMovies from './components/MyMovies';
import MovieFinderPage from './Components/MovieFinderPage';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Nav />
        <Switch>

          <Route path="/" exact>
            <AboutUs />
          </Route>


          <Route path="/MyMovies">
            <MyMovies />
          </Route>


          <Route path="/MovieFinder">
            <MovieFinderPage />
           </Route>

          <Route path="/ContactUs">
            <ContactUs />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
