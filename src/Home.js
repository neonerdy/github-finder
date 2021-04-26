import React, { Component } from 'react'
import axios from 'axios';
import Search from './Search';
import Users from './Users';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
      }
    
    
      async componentDidMount() {
    
        
        const res = await axios.get('http://api.github.com/users');
        
        this.setState({
           users: res.data,
           loading: false,
           msg: ''
         }) 
        
      }
    
      
      searchUsers = async(text) => {
        
        const res = await axios.get('http://api.github.com/search/users?q=' + text);
        this.setState({
          users: res.data.items
        })
    
      }
    
      clearUsers = () => {
        this.setState({
          users: []
        })
      }
    
      setAlert = (m) => {
        this.setState({
          msg: m
        })
      }
    

      

    render() {
        return (
            <div className="container">
                 {/*}
                <Alert alert={this.state.msg}/>
                {*/}

                <Search 
                    searchUsers = {this.searchUsers}
                    clearUsers = {this.clearUsers}
                    showClear = {this.state.users.length > 0 ? true : false}
                    setAlert = {this.setAlert}
                    />
                    <Users users={this.state.users}/>
                            
            </div>
        )
    }
}

export default Home
