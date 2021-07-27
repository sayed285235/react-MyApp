import React, { Component } from "react";
import BookList from "./list/BookList.js";
import bookList from "../asstes/bookList.js";
import NewBook from "./representatinal/NewBook.js";
import BookDetail from "./representatinal/BookDetail.js";

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';



class MainComponent  extends Component {
// function Component
// function App() {
//   return (
//       <div className="App">
//         <h1>Hello react</h1>
//         <Persone  name="Abu sayed" age = "25"> I'am Abu sayed </Persone>
//         <Persone  name="Sayed" age = "24" />
//         <Persone  name="Kawser" age = "23" />
//       </div>
//   );
// }

//Class base Component 

// class App extends Component{
//   render(){
//     let obj = new Component();
//     console.log(obj);
//     return (
//       <div className="App">
//         <h1>Hello react</h1>
//         <Persone  name="Abu sayed" age = "25"> I'am Abu sayed </Persone>
//         <Persone  name="Sayed" age = "24" />
//         <Persone  name="Kawser" age = "23" />
//       </div>
//     );
//   }
// }


// function base Component 
// book list code 
// function App() {
//   return (
//       <div className="App">
//         <h1>Book List</h1>
//         <Book bookName="1100" writer="Abu sayed"/>
//         <Book bookName="1200" writer="Sayed"/>
//         <Book bookName="1300" writer="Rarim"/>
//         <Book bookName="1400" writer="Rahim"/>
//       </div>
//   );
// }


// class base Component
// start class component property


constructor(props) {
  super(props)

  this.state = {
    book : bookList,
    // ShowBooks: true,
    selectedBook: null
  }
  // console.log("MainComponent constructor");
}


selectedBookHendler = bookId => {
  const book = this.state.book.filter(
    book => book.id === bookId)[0];

  this.setState({
    selectedBook: book
  });
}





  // changeBookState  or overeating content
  // changeBookState = (name) => {
  //   this.setState({
  //     book : [
  //       {bookName:"2000", bookWeiter: name},
  //       {bookName:"2001", bookWeiter:"Nijum"},
  //       {bookName:"2002", bookWeiter:"Fari"}
  //     ]
  //   });
  // }


  /*


// ChangeWithInputStatus


  changeWithInputStatus = (event, index) => {
    // this.setState({
    //   book : [
    //     {id: 1, bookName:"2000", bookWeiter: event.target.value},
    //     {id: 2, bookName:event.target.value, bookWeiter:"Nijum"},
    //     {id: 3, bookName:"2002", bookWeiter:"Fari"}
    //   ]
    // });


    const books = [...this.state.book];
    const book = {
      ...this.state.book[index]
    }
    book.bookName = event.target.value;
    books[index] = book;
    this.setState({
      book: books
    });
  }





  // deleteBookState
  deleteBookState = index => {
    // const books = this.state.book.slice();
    // const books = this.state.book.map(item => item);
    const books = [...this.state.book];
    books.splice(index, 1);
    this.setState({
     book : books
    });
  }

  // toggleBooks
  toggleBooks = () => {
    this.setState({
      ShowBooks : !this.state.ShowBooks
    });
  }





    //Component creation lifecycle function

  //   UNSAFE_componentWillMount(){
  //   console.log("MainComponent componentWillMount");
  // }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("MainCompontnt getDerivedStateFromProps", nextProps, prevState);

    return prevState;
  }

  componentDidMount(){
    console.log("MainComponent componentDidMount");
  }

//Component creation lifecycle Update function by-state

  shouldComponentUpdate(nextProps, nextState){
    console.log("Update MainCompontnt shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  // UNSAFE_componentWillUpdate( nextProps, nextState){
  //   console.log("Update MainCompontnt componentWillUpdate", nextProps, nextState);
  // }

  getSnapshotBeforeUpdate(){
    console.log("Update MainCompontnt getSnapshotBeforeUpdate");
}

  componentDidUpdate(){
    console.log("Update MainCompontnt componentDidUpdate");
  }
*/

  render(){

    // console.log("MainComponent Rendet");

    // const bookList = this.state.book;

     const books = <BookList  
      books = {this.state.book} 
      // deleteBookState = {this.deleteBookState}
      // changeWithInputStatus = {this.changeWithInputStatus}
      selectedBookHendler = {this.selectedBookHendler}
      />


    // console.log(books);

    return(
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li><NavLink to="/" exact >Home</NavLink></li>
            <li><NavLink to="/newBook" exact >New Book</NavLink></li>
          </ul>
        </nav>

        <Switch>
            <Route path="/books" exact render={()=> books } />
            <Route path="/newBook" exact component={ NewBook} />

            <Route path="/bookDetails/:id/:bookName" exact render={()=><BookDetail book= {this.state.selectedBook} /> } />
            
            <Redirect from="/" to="/books" />
        </Switch>

{/* 
        <h1 style={style}>Book List </h1>
        <br></br> */}
      
        {/* <button onClick={ this.toggleBooks}>Toggle Books</button> */}
      
        {/* { this.state.ShowBooks ? books : null } */}

        {/* <Book 
          bookName={this.state.book[2].bookName} 
          bookWeiter={this.state.book[2].bookWeiter}
          ChangeBookState={this.changeBookState.bind(this, "I am fariya")}/> */}

        {/* <button className="btn btn-susscess" onClick={ () => this.changeBookState('I am Abu sayed')}>Change State</button> */}
        {/* <input type="text" placeholder="Change Status...." onChange={this.changeWithInputStatus}/>
        <br/> */}


        <br/>
        <br/>
      </div>
    );
  }


}


export default MainComponent;