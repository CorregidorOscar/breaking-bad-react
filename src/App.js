import Landing from './components/Landing/Landing'
import './App.css';
import { Route } from 'react-router'
import Home from './components/Home/Home'


function App() {


  return (
    <div className="App">
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
