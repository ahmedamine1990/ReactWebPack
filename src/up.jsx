import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { fetchUtils,Admin,List, Datagrid, TextField, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';



const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Access-Control-Allow-Origin', 'http://localhost');
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:5000', httpClient);

export const Postadmin = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="books" list={PostList} />
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
