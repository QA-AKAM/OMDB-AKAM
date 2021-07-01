import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import Footer from './components/Footer';
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
        {/* <Switch>
          <Route path="/" exact>
            <HomeRoute />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <ContactRoute />
          </Route>

          <Route path="/character/:id">
            <Character />
          </Route>

        </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
