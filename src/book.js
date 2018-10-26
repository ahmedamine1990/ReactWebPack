import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class BookComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const listItems = this.props.value.map((item,index) =>
            <TableRow key={index}>
            <TableCell>{item.isbn}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.name}</TableCell>
            </TableRow>
        );

        return <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>isbn</TableCell>
                            <TableCell>price</TableCell>
                            <TableCell>name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems}
                    </TableBody>
                </Table>
            </Paper>
    }
}


export class BookAddForm extends React.Component{
    constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: '',price:'',isbn:''};
    }

    handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        console.log(evt.target.name);
        this.setState({ [evt.target.name]: evt.target.value });
        this.setState({ [evt.target.name]: evt.target.type == 'number' ?  (evt.target.name == 'price' ? parseFloat(evt.target.value) : parseInt(evt.target.value)) : evt.target.value});    
      }

  handleSubmit(event) {
    event.preventDefault();
    var newBook = {
        isbn: this.state.isbn,
        name: this.state.name,
        price : this.state.price  
    }
    books.push(newBook);
    console.log(books);
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input name="name"  value={this.state.name} onChange={this.handleChange}  type="text" placeholder="Enter a Bookname" required/>
            <input name="price" value={this.state.price} onChange={this.handleChange} type="number" placeholder="Enter a BookPrice" required />
            <input name="isbn"  value={this.state.isbn} onChange={this.handleChange}  type="number" placeholder="Enter a BookIsbn" required />
            <input type="submit"  className="button is-primary is-large is-fullwidth" value="Submit"/>
        </form>
        )
    }

}



const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
  

  
  
