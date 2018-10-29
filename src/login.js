import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';


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
        console.log(this.state.username);
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
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' name='username' iconPosition='left' placeholder='E-mail address' 
                                onChange = { (event) => this.setState({ username: event.target.value })} />
                            <Form.Input fluid icon='lock' name='password' iconPosition='left' placeholder='Password'  type='password' 
                                onChange = {(event)  =>  this.setState({ password: event.target.value })}/>
                            <Button color='teal' fluid size='large'  
                                onClick={(event) => this.handleSubmit(event)}>
                                Login
                            </Button>                   
                        </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>        
            </div>
        )
    }
}