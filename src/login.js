import React from 'react';

export class UserLogin extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {username: '',password:''};
    }
    
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });   
        }

    handleSubmit(event) {
        event.preventDefault();
        var OBJECT = {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password
            })
        }
        fetch('http://localhost:5000/login', OBJECT)  
        .then(res => {
            console.log(res);
            console.log(res.body);
            console.log(res.body.text);
            return res.json();
        })
        .then( resJson =>  {
            console.log(resJson);
            return resJson;
        })
        
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            <input name="username"  value={this.state.username} onChange={this.handleChange}  type="text" placeholder="Enter a username" required/>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Enter your password" required />
            <input type="submit"  className="button is-primary is-large is-fullwidth" value="Submit"/>
        </form>
    }
}