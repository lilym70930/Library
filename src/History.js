import React from 'react';

const History = (props) =>{
    const element_history = props.books.map((book , index) =>(
        <div>
            <table>
                <tr>
                <td>{index +1}</td>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.pages}</td>
                </tr>
            </table>
        </div>
    ));
    return (<div>
        <h1 id="history_hedline">History</h1>
        <tr>
                    <th>Index</th>
                    <th>Book Id</th>
                    <th>Name</th>
                    <th>#Pages</th>
                </tr>
         {element_history} 
         </div>)
};

export default History ;
