import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter,Redirect} from "react-router-dom";
import { Provider, connect } from "react-redux"; //← Bridge React and Redux


import {store1} from './redux/store';
import { addUser,addBook,editBook,editBookField,deleteBook, getBooks} from './redux/actions';

import { ChatBox } from './chatbox';
import {BookAddForm,BookList} from './redux/app';

import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';


export class UserLogin extends React.Component{
    constructor(props,context) {
        super(props,context);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {username: '',password:''};
    }
    
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });   
    }

    handleSubmit(event) {
        event.preventDefault();
        let name= this.state.username;
        let passwd= this.state.password;
        var OBJECT = {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': name,
                'password': passwd
            })
        }
        fetch('http://localhost:5000/login', OBJECT)  
        .then(res => {
            console.log(res);
            if (res.status ==200)
            {
                console.log("Successful authentification");
                this.props.addUser(name,passwd);
                this.props.history.push('./box');
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

function  mapStateToProps (state){
    return {books: state.books, user : state.user, IsAuth : state.IsAuth};
};
function  mapDispatchToProps(dispatch) {
    return{
        addUser: (username, password) => {dispatch(addUser(username,password))},
        addBook: (newBook) => {dispatch(addBook(newBook))},
        getBooks: (Books) => {dispatch(getBooks(Books))},
        editBook: (changeBook, bookRank) => {dispatch(editBook(changeBook,bookRank))},
        editBookField: (newValue,fieldToUpdate,bookRank) => {dispatch(editBookField(newValue,fieldToUpdate,bookRank))},
        deleteBook : (bookRank) => {dispatch(deleteBook(bookRank))}
    }; 
};


const LoginWithProvider =  connect(mapStateToProps,mapDispatchToProps)(UserLogin);
const BookWithProvider =connect(mapStateToProps,mapDispatchToProps)(BookList);
const AddBookWithProvider =connect(mapStateToProps,mapDispatchToProps)(BookAddForm);
const ChatBoxWithProvider = connect (mapStateToProps,mapDispatchToProps)(ChatBox);

withRouter(LoginWithProvider)

export const Ind = () => (
        <Router>
            <div>
            <ul>
                <li><Link to='/'>login</Link> </li>
                <li><Link to='/box'>chatbox</Link></li>
                <li><Link to='/book'>books</Link></li>
                <li><Link to='/Addbook'>Add book</Link></li>
            </ul>
            <Route exact path="/" component={LoginWithProvider} />
            <Route path="/box" component={ChatBoxWithProvider} />
            <Route path="/book" component={BookWithProvider} />
            <Route path="/Addbook" component={AddBookWithProvider} />
            <Redirect from='*' to='/' />
            </div>
        </Router>
);

export const App = ()=>(<Provider store={store1}><Ind/></Provider>);