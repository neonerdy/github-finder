import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            avatar_url: '',
            location: '',
            company: '',
            bio: '',
            blog: '',
            login: '',
            html_url: '',
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
            hireable: false
        }
    }

    componentDidMount() {

        const userName = this.props.match.params.userName;
        
        console.log("user : " + userName);

        this.getUser(userName);


    }


    getUser = async(userName) => {
        
        const res = await axios.get('https://api.github.com/users/' + userName);
        this.setState({
            name: res.data.name,
            avatar_url: res.data.avatar_url,
            location: res.data.location,
            company: res.data.company,
            bio: res.data.bio,
            blog: res.data.blog,
            login: res.data.login,
            html_url: res.data.html_url,
            followers: res.data.followers,
            following: res.data.following,
            public_repos: res.data.public_repos,
            public_gists: res.data.public_gists,
            hireable: res.data.hireable
        })
    }
    

    render() {
        return (
            <div className="container">
            <Fragment>
                 <Link to="/" className="btn btn-light">
                    Back To Search
                </Link>   
                Hireable: {' '}
                {this.state.hireble ? (
                    <i className='fas fa-check text-success'/>
                ): (

                    <i className='fas fa-times-circle text-danger'/>
                )}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={this.state.avatar_url} className="round-img" 
                            style={{width: '150px'}}/>
                        <h1>{this.state.name}</h1>
                        <p>Location: {this.state.location}</p>
                    </div>
                    <div>
                        {this.state.bio && (
                            <div>
                                <h3>BIO</h3>
                                <p>{this.state.bio}</p>
                            </div>
                        )}
                        <a href={this.state.html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                            <li>
                                <div>
                                    <strong>Username : </strong> {this.state.login}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Company : </strong> {this.state.company}
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="card text-center">
                    <div className='badge badge-primary'>Followers : {this.state.followers}</div>         
                    <div className='badge badge-success'>Following : {this.state.following}</div>         
                    <div className='badge badge-light'>Public Repos : {this.state.public_repos}</div>         
                    <div className='badge badge-dark'>Public Gists : {this.state.public_gists}</div>         
                

                </div>  



            </Fragment>
            </div>
        )
    }
}

export default User
