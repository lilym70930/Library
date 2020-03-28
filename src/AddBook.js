import React, { Component } from 'react';

class AddBook extends Component{
name = "" ;
pages = 0;
index = -1;
id = -1;
isNew = false;


    render(){
        return(<div className = "addBook">
            <h1>Add Book</h1>
            <div id="container_add">
            <input id="add_name" onChange ={event => (this.name = event.target.value)} type="text" placeholder = "name"></input> <br></br>
            <input id="add_pages" onChange ={event => (this.pages = event.target.value)} type="number" placeholder = "number of pages"></input><br></br>
            <br></br>
            <input onClick = {() =>{
                this.props.isNewHendler(this.index)
            }} type ="checkbox"></input> <br></br>
            <h4>new</h4>
            <button id="save_button_addBook" onClick ={()=>{
                this.props.addBook(this.name, this.pages, this.id, this.isNew)
            }}>Save</button>
            </div>
        </div>)
    }
}

export default AddBook;