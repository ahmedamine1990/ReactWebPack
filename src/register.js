import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class UserRegister extends React.Component{
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
            if (res.status ==200)
            {
                console.log("Successful authentification");
            }
            else
            {
                console.log("Failed authentification");
            }
        })
      
        
    }
    render(){
        return (
            <div>
            <MuiThemeProvider>
            <AppBar  title="Login" />
            <TextField hintText="Enter your Username" floatingLabelText="username" onChange = { (event,newValue) => this.setState({ username: newValue })} />
            <br/>
            <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" onChange = {(event,newValue)  =>  this.setState({ password: newValue })} />
            <br/>
            <RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleSubmit(event)}/>
            </MuiThemeProvider>
            </div>
        )
    }
}