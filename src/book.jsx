import React from "react";
import ReactDOM from "react-dom";



export class BookComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const listItems = this.props.value.map((item,index) =>
            <tr key={index}>
            <td>{item.isbn}</td>
            <td>{item.price}</td>
            <td>{item.name}</td>
            </tr>
        );

        return <div>
                <p>List of Books :</p>
                <table>
                    <tbody>
                    <tr>
                        <th>isbn</th><th>price</th><th>name</th>
                    </tr>
                    {listItems}
                    </tbody>
                </table>
            </div>
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
