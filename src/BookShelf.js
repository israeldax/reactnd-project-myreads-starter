import React from 'react'
import Book from './Book'
import { toCamelCase } from './Helper'

// TODO: Adicionar propTypes

export default function BookShelf({ shelfName, books }) {

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
  )};

// export default BookShelf;