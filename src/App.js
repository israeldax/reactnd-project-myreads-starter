import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './Util/BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    const books = BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => <Home books={this.state.books}/> }/>
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
