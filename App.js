
import './App.css';
import CheckOut from './CheckOut';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/checkout">
              <Header></Header>
              <CheckOut></CheckOut>
            </Route>

            <Route path="/">
              <Header></Header>
              <Home></Home>
            </Route>


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
