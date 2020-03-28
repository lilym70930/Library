import React, { Component } from 'react';

const Books = (props) =>{
    
    const element = props.books.map((book, index) =>(
        (<div id="main_container" >
            <div id="book_container">
        <p>{book.name}</p>
        <p>{book.pages} </p> 
        <p>{book.isNew} </p> 
        <button id="delete_button_books" onClick ={()=>{
            props.deleteBook(index)
        }}>Delete</button> <button id="edit_button_books" onClick = {() =>{
            props.editBook()
        }}>Edit</button>
        </div>
        </div>)
    ));

    return (<div>
        <h1 id="books_hedline">BOOKS</h1>
         {element}
         </div>)
};

export default Books;