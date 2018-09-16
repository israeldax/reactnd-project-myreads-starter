import React from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'
import { toCamelCase } from '../Util/Helper'

function BookShelf({ shelfName, books, changeShelf }) {

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
              filteredbooks.map(book => <Book key={book.id} book={book} changeShelf={changeShelf} />)
              : 'Não há livros nessa prateleira'
          }
        </ol>
      </div>
    </div>
  )
};

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BookShelf;