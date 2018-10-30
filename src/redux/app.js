import React from 'react';
import { Provider, connect } from "react-redux"; //← Bridge React and Redux
import { addBook,editBook,editBookField,deleteBook, getBooks} from './actions';
import {store1} from './store';

export class BookList extends React.Component{
    componentDidMount() {
        fetch(`http://localhost:5000/books`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.props.getBooks(json);     
        }); 
      }
    
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCellEdit = this.handleCellEdit.bind(this);
      }

    handleDelete (evt) {
        var id = evt.target.name;
        this.props.deleteBook(id);
    }

    handleEdit (evt) {
        var bookRank = evt.target.name;
        var changeBook = {'isbn':98725 ,'name': 'name1', 'price':13.66}
        this.props.editBook(changeBook,bookRank);
    }

    handleCellEdit (evt) {
        var bookRank = evt.target.name;
        var newValue = evt.target.value;
        var fieldToUpdate = evt.target.key;
        this.props.editBookField(newValue,fieldToUpdate,bookRank);
    }

    render(){
            var booksRow= this.props.books.map((b,i) => <tr key={i}>
                                                <td>{b.name}</td>
                                                <td><input type='number' key="bookPrice" value={b.price} name={i}  onChange={this.handleCellEdit} /></td>
                                                <td>{b.isbn}</td>
                                                <td><button onClick={this.handleEdit} name={i} value="edit" /></td>
                                                <td><button onClick={this.handleDelete} name={i} value="delt"/></td>
                                            </tr>);
            return(
                <table>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                            <th>isbn</th>
                            <th>edit</th>
                            <th>delt</th>
                        </tr>
                        {booksRow}
                    </tbody> 
                </table>
            )
        }
}  
export class BookAddForm extends React.Component{
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: '',price:'',isbn:''};
}

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        this.setState({ [evt.target.name]: evt.target.type == 'number' ?  (evt.target.name == 'price' ? parseFloat(evt.target.value) : parseInt(evt.target.value)) : evt.target.value});    
      }

  handleSubmit(event) {
    event.preventDefault();
    const newBook = {
        isbn: this.state.isbn,
        name: this.state.name,
        price : this.state.price  
    }
    this.props.addBook(newBook);
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


export const BookWithoutProvider = () => {
    return <div>
       <BookList/>
       <BookAddForm/>
    </div>
  };

