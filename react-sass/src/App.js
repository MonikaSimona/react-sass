import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServiceOpenItem from './components/ServiceOpenItem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <div className="container">
          <div className="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/service' component={ServiceOpenItem} />
            </Switch>
          </div>
        </div>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
