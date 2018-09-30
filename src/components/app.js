import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BooksDetails from '../containers/bookdetails';

export default class App extends Component {
  render() {
    return (
      <div><BookList />
      <BooksDetails></BooksDetails></div>
    );
  }
}
