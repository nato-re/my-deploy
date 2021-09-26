import logo from './logo.svg';
import './App.css';
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import Xablau from './Xablau';
function App() {
  console.log(process.env);
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Link to='/xablau'> 
          To xablau
          </Link>
          <img src={logo} />
        </Route>
        <Route exact path='/xablau'>
          <Xablau />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
