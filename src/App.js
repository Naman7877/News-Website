import './App.css';
import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
        <Route exact path="/">
            <Newsitem key="general" counrty="in" catg="general" />
          </Route>
          <Route exact path="/home">
            <Newsitem key="general" counrty="in" catg="general" />
          </Route>

          <Route exact path="/general">
            <Newsitem key="general" counrty="in" catg="general" />
          </Route>
          <Route exact path="/business">
            <Newsitem key ="business" counrty="in" catg="business" />
          </Route>
          <Route exact path="/entertainment">
            <Newsitem key ="entertainment" counrty="in" catg="entertainment"/>
          </Route>
          <Route exact path="/health">
            <Newsitem key="health" counrty="in" catg="health" />
          </Route>
          <Route exact path="/sports">
            <Newsitem key ="sports" counrty="in" catg="sports" />
          </Route>
          <Route exact path="/technology">
            <Newsitem key="technology" counrty="in" catg="technology" />
          </Route>
          <Route exact path="/science">
            <Newsitem key ="science" counrty="in" catg="science" />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
