import React, { Component } from 'react'
import {debounce, findIndex} from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../Util/BooksAPI'
import Book from '../components/Book'

class Search extends Component {

  state = {
    search: '',
    searchedBooks: [],
  }

  static propTypes = {
    changeShelf: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.searchInput.focus()
  }

  /**
   * @description Fetch books and updates shelf value according with Home component books
   */
  updateSearchedBooks = debounce(async () => {
    const {search} = this.state
    if(search === '') {
      this.setState({ searchedBooks: [] })
      return
    }

    const searchedBooks = await BooksAPI.search(search, 20)
    this.props.shelfBooks.forEach(book => {
      const sameBookPosition = findIndex(searchedBooks, {id: book.id})
      if (sameBookPosition !== -1) searchedBooks[sameBookPosition].shelf = book.shelf
    })

    this.setState({ searchedBooks })
  }, 400)


  handleSearch = (searchTerm) => {
    this.setState({ search: searchTerm })
    this.updateSearchedBooks()
  }

  render() {
    const { search, searchedBooks } = this.state
    const { changeShelf } = this.props

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
              type="text" value={search} ref={input => { this.searchInput = input }}
              onChange={(e) => this.handleSearch(e.target.value.trim())}
              placeholder="Search by title or author"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchedBooks.error ? '' :
                searchedBooks.map(book =>
                  <Book key={book.id} book={book} changeShelf={changeShelf} />
                )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
