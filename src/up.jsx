import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { Admin,List, Datagrid, TextField, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000/Books');

export const Postadmin = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

 const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="price" />
            <TextField source="name" />
            <TextField source="isbn" />
        </Datagrid>
    </List>
);

export class BookH extends React.Component{
    constructor(){
        super();
    }
    render(){
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" >
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
