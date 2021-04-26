import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {


  static defaultProps = {
      title: 'GitHub Finder',
      icon: 'fab fa-github'
  }

  render() {

      return (
        <nav className="navbar bg-primary">
            <h2>
                <i className={this.props.icon}/>  {this.props.title}
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>        
              </li>
              <li>
                <Link to="/about">About</Link>        
              </li>
              

            </ul>
        </nav>
      );
      
    }
  
}

export default Navbar;
