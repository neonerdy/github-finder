import logo from './logo.svg';
import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import UserItem from './UserItem';
import Users from './Users';
import axios from 'axios';
import Search from './Search';
import Alert from './Alert';
import Home from './Home';
import About from './About';
import { User } from './User';

class App extends Component {


  

  render() {

      return (

        <Router>
            <div className="App">
                <Navbar
                  icon="fab fa-github"
                  title="GitHub Finder"
                />

                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:userName' component={User}/>
                                    
                </Switch>

              </div>
            
        </Router>
      );
      
    }
  
}

export default App;
