import React, { Component } from 'react';
import Book from '../representatinal/Book.js'
import { Link, withRouter } from 'react-router-dom';


class BookList extends Component {
    // constructor(props){
    //     super(props);
    //     console.log("BookList constructor");
    // }
/*
    //Component creation lifecycle function
    // UNSAFE_componentWillMount(){
    //     console.log("BookList componentWillMount");
    // }

    componentDidMount(){
        console.log("BookList componentDidMount");
    }

    //Component creation lifecycle Update function by-props

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("Update BookList componentWillReceiveProps", nextProps);
    // }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("BookList getDerivedStateFromProps", nextProps, prevState);
        return prevState;
      }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Update BookList shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    // UNSAFE_componentWillUpdate(nextProps, nextState){
    //     console.log("Update BookList componentWillUpdate", nextProps, nextState);
    // }  

    getSnapshotBeforeUpdate(){
        console.log("Update BookList getSnapshotBeforeUpdate");
    }
    
    componentDidUpdate(){
        console.log("BookList componentDidUpdate");
    }
*/
    render(){
        // console.log("BookList return");
        // console.log(this.props);
        return (
            this.props.books.map( ( book, index) => {
                return(

                    <Link to={"/bookDetails"+"/"+book.id+"/"+book.bookName} key = {book.id} style={{textDecoration: "none", color:"#000"} }>
                        <Book 
                            
                            bookName={book.bookName} 
                            bookWeiter={book.bookWeiter}
                            // delete={ () => this.props.deleteBookState(index)}
                            // inputName= { (event) => this.props.changeWithInputStatus(event, index)}

                            selectedBookHendler={()=> this.props.selectedBookHendler(book.id)}
                        />
                    </Link>
                  
                );
            })
        );
    }
}

export default withRouter(BookList);