import React, { Component } from 'react';
import '../../stylesheets/Book.css' ;



// function component
/*
const Book = props => {
    return (
        <div className="Book">
            <h3 onClick={props.delete}>Book Name: {props.bookName}</h3>
            <p> Writer: {props.bookWeiter} </p>
            <input type="text" placeholder="Change Status...." onChange={props.inputName} value={props.bookName}  />
        </div>
    );
}
*/

class Book extends Component{
    // constructor(props){
    //     super(props);
    //     console.log("Book constructor");
    // }
/*
    //Component creation lifecycle function
    UNSAFE_componentWillMount(){
        console.log("Book componentWillMount");
    }

    componentDidMount(){
        console.log("Book componentDidMount");
    }
*/
    render(){
        // console.log("Book return");
        return (
            <div className="Book" onClick={this.props.selectedBookHendler}>
                {/* <h3 onClick={this.props.delete}>Book Name: {this.props.bookName}</h3> */}
                <h3>Book Name: {this.props.bookName}</h3>
                <p> Writer: {this.props.bookWeiter} </p>
                {/* <input type="text" placeholder="Change Status...." onChange={this.props.inputName} value={this.props.bookName}  /> */}
            </div>
        );
    }
}
export default Book;

