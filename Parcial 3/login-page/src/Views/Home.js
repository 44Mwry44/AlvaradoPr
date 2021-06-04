import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            user: "",
            login: false
        };

        this.handleLogout = this.handleLogout.bind(this);
    }
    
    async componentDidMount()
    {
        this.setState({login: window.sessionStorage.getItem("isLogged")});
        this.setState({user: window.sessionStorage.getItem("user")});
        const log = this.state.login;
        console.log(!window.sessionStorage.getItem("isLogged"));
    }

    handleLogout()
    {
        this.setState({login: false});
        window.sessionStorage.removeItem("isLogged");
        window.sessionStorage.removeItem("user");
        console.log(this.state.login);
    }
    
    render() {
        if(!window.sessionStorage.getItem("isLogged"))
        {
            return (<Redirect to = {'/'} />);
        }

        return (
            <div>
                Bienvenido: {this.state.user}<br/>
                <Link to = "/">
                    <button onClick = {this.handleLogout}>Log out</button>
                </Link>
            </div>
        )
    }
}


export default Home;