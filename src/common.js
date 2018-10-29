import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './static/style.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {ChatBox} from "./chatbox";
import {UserLogin} from  './login';
import {BookWithProvider} from './redux/app';



class AppHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){}

    render(){
        return(
            <div className={styles.appHeader}>
                <MuiThemeProvider>
                <AppBar  title="React Redux Apollo" />
                    <Tabs onChange={this.handleChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}

class AppFooter extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){}

    render(){
        return(
            <div className={styles.appFooter}>
                <MuiThemeProvider>
                    <Tabs onChange={this.handleChange}>
                        <Tab label="MyFaceBook" />
                        <Tab label="MyLinkedIn" />
                        <Tab label="MyInstagram" />
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}



// const BookWithProvider = ()=>(<Provider store={store1}><App /></Provider>);
class AppNavigation extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){}

    render(){
        return(
            <div className={styles.appNavigation}>
               <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Login comp</Link>
                    </li>
                    <li>
                        <Link to="/box">chat Box</Link>
                    </li>
                    <li>
                        <Link to="/Books">Book List</Link>
                    </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={UserLogin} />
                    <Route path="/box" component={ChatBox} />
                    <Route path="/Books" component={BookWithProvider} />
                </div>
                </Router>
            </div>
        )
    }
}

export class PageLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="MasterLayout">
                <AppHeader />
                <AppNavigation />
                <AppFooter />
            </div>
        )
    }

}



