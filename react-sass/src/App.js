import './App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/services' component={Services} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
