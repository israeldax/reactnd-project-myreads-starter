import React, { Component } from 'react'
import {debounce} from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../Util/BooksAPI'
import Book from '../components/Book'

class Search extends Component {

  state = {
    search: '',
    searchedBooks: []
  }

  static propTypes = {
    changeShelf: PropTypes.func.isRequired
  }

  updateShelf = (book, newShelfValue) => {
    // Atualiza estante no componente HOME
    this.props.changeShelf(book, newShelfValue)

    // Renderiza livro com novo valor
    let newState = this.state.searchedBooks.map(oldBook => {
      if (oldBook.id === book.id)
        return book
      else
        return oldBook
    })

    this.setState({ books: newState })
  }

  /**
   * @description Busca livros de acordo com a searchTerm passada e atualiza estado
   * @argument string query
   */
  updateSearchedBooks = debounce(async (searchTerm) => {
    const searchedBooks = await BooksAPI.search(searchTerm, 20)
    this.setState({ searchedBooks })
  }, 600)


  handleSearch = (e) => {
    const searchTerm = e.trim()

    if (searchTerm === '') {
      this.setState({ search: '', searchedBooks: [] })
      return
    }

    this.setState({ search: searchTerm })
    this.updateSearchedBooks(searchTerm)
  }

  render() {
    const { search, searchedBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text" value={search}
              onChange={(e) => this.handleSearch(e.target.value)}
              placeholder="Search by title or author"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchedBooks.error ? '' :
                searchedBooks.map(book =>
                  <Book key={book.id} book={book} changeShelf={this.updateShelf} />
                )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
