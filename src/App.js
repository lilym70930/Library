import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import AddBook from './AddBook';
import Books from './Books';
import History from './History';
import {Redirect} from "react-router-dom";


class App extends Component {
  state = { books: [] , 
    flag : false
  };
  
  addBook = (name, pages, id , isNew) =>{
    id++;
    let tempBooks = [...this.state.books];
    tempBooks.push({name: name, pages: pages, id:id , isNew: isNew});
    this.setState({books: tempBooks });
    
  };

  deleteBook = (index) =>{
    let tempBooks = [...this.state.books];
      tempBooks.splice(index , 1);
      this.setState({books : tempBooks});
    };

  editBook = (isNew) =>{
    let tempBooks = [...this.state.books];
    this.setState({books : tempBooks});
    this.setState({flag : true});

    if(this.state.flag ){
      console.log(this.state.flag);
      return <Redirect to = '/'/>     
    }
  }

isNewHendler = (index) =>{
  let tempBooks = [...this.state.books];
  this.setState({books : tempBooks});
};

  render(){
 
  return (
    <BrowserRouter>
    <div className="App">
    <Link to = "/">Home</Link>
    <Link to = "/AddBook">Add Book</Link>
    <Link to = "/Books">Books</Link>
    <Link to = "/History">History</Link>

    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/AddBook" render = {() => <AddBook addBook = {this.addBook} isNewHendler={this.isNewHendler} />}/>
      <Route exact path = "/Books" render = {() => <Books books = {this.state.books}  deleteBook= {this.deleteBook} editBook= {this.editBook}/>}/>
      <Route exact path = "/History" render = {() => <History books = {this.state.books}/>}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
  }

}

export default App;
