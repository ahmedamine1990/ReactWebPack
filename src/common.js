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
                <AppBar  title="Login" />
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

class AppNavigation extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){}

    render(){
        return(
            <div className={styles.appNavigation}>
                <MuiThemeProvider>
                    <List onChange={this.handleChange}>
                        <ListItem >
                            <ListItemText inset primary="Inbox" />
                        </ListItem>
                        <ListItem >
                            <ListItemText inset primary="Inbox" />
                        </ListItem>
                        <ListItem >
                            <ListItemText inset primary="Inbox" />
                        </ListItem>
                    </List>
                </MuiThemeProvider>
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



