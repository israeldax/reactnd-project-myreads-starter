import React, { Component } from 'react'
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

  handleSearch(e) {
    const searchTerm = e.trim()
    this.setState({ search: searchTerm })

    if (searchTerm === '') {
      this.setState({ searchedBooks: [] })
      return
    }

    BooksAPI.search(searchTerm, 20).then(searchedBooks =>
      this.setState({ searchedBooks })
    )
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
