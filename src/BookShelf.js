import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { toCamelCase } from './Helper'

const BookShelf = function BookShelf({ shelfName, books }) {

  // Camelcase é o formato do valor utilizado pela api
  const shelfValue = toCamelCase(shelfName);
  const filteredbooks = books.filter(book => book.shelf === shelfValue);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            filteredbooks.length > 0 ?
              filteredbooks.map(book => <Book key={book.id} book={book} />)
              : 'Não há livros nessa prateleira'
          }
        </ol>
      </div>
    </div>
  )
};

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;