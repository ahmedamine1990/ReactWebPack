import React from 'react';
import { connect } from 'react-redux';
import { addBook, deleteBook, fetchSubredditJson} from './actions';



class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }

    handleDelete (evt) {
        var id = evt.target.name;
        this.props.deleteBook(id);
    }

    handleEdit (evt) {
        var id = evt.target.name;
        this.props.editBook(id);
    }

    render(){
            var booksRow= this.props.books.map((b,i) => <tr key={i}>
                                                <td>{b.name}</td>
                                                <td>{b.price}</td>
                                                <td>{b.isbn}</td>
                                                <td><button onClick={this.handleEdit} name={i} text="edit" /></td>
                                                <td><button onClick={this.handleDelete} name={i} text="delt"/></td>
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
class BookAddForm extends React.Component{
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

function  mapStateToProps (state){
    return {books: state.books};
};
function  mapDispatchToProps(dispatch) {
    return{
        addBook: (newBook) => {dispatch(addBook(newBook))},
        deleteBook : (Bookrank) => {dispatch(deleteBook(Bookrank))}
    }; 
};

const ConnectedBookList =  connect(mapStateToProps,mapDispatchToProps)(BookList);
const ConnectedBookAddForm =  connect(mapStateToProps,mapDispatchToProps)(BookAddForm);


export const App = () => {
    return <div>
       <ConnectedBookList/>
       <ConnectedBookAddForm/>
    </div>
  };

 