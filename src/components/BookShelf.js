import React from 'react'
import PropTypes from 'prop-types'
import {camelCase} from 'lodash'
import Book from '../components/Book'

function BookShelf({ shelfName, books, changeShelf }) {

  // Camelcase is the shape of the shelf value used in the API
  const shelfValue = camelCase(shelfName)
  const filteredbooks = books.filter(book => book.shelf === shelfValue)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            filteredbooks.length > 0 ?
              filteredbooks.map(book => <Book key={book.id} book={book} changeShelf={changeShelf} />)
              : 'There is no books in this shelf'
          }
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf