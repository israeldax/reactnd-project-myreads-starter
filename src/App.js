import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './Util/BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { books: [] }
    this.updateShelf = this.updateShelf.bind(this)
  }

  // TODO: Implementar localStorage
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  updateShelf(book, newShelfValue) {
    book.shelf = newShelfValue
    BooksAPI.update(book, newShelfValue)

    let booksDidntChange = this.state.books.filter(oldBook => oldBook.id !== book.id)
    if (newShelfValue !== 'none')
      booksDidntChange.push(book)
    this.setState({ books: booksDidntChange })
  }

  // TODO: fazer um 404
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => <Home books={this.state.books} changeShelf={this.updateShelf} /> }/>
        <Route path="/search" render={ () => <Search changeShelf={this.updateShelf} /> }/>
      </div>
    )
  }
}

export default BooksApp
