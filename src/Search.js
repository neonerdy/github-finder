import React, { Component } from 'react'

export class Search extends Component {


    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text == '') {
            this.props.setAlert('Please enter something');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    render() {

        const {showClear, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users ..." 
                        value={this.state.text} onChange= {this.onChange}/>
                        
                    <input type="submit" value="search" className="btn btn-dark btn-block" />                    
                    {showClear && (
                    <button className="btn btn-light btn-block" 
                        onClick={clearUsers}>Clear</button>
                    )} 
                  </form>           
            </div>
        )
    }
}

export default Search
