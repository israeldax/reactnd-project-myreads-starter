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

  // TODO: Maybe implement localStorage
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  /**
   * @description Update book shelf
   * @param {object} book
   * @param {string} newShelfValue
   */
  updateShelf(book, newShelfValue) {
    book.shelf = newShelfValue
    BooksAPI.update(book, newShelfValue)

    let booksDidntChange = this.state.books.filter(oldBook => oldBook.id !== book.id)
    if (newShelfValue !== 'none')
      booksDidntChange.push(book)
    this.setState({ books: booksDidntChange })
  }

  // TODO: Create a 404 page
  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={ () => <Home books={books} changeShelf={this.updateShelf} /> }/>
        <Route path="/search" render={ () => <Search shelfBooks={books} changeShelf={this.updateShelf} /> }/>
      </div>
    )
  }
}

export default BooksApp
