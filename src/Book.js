import React from 'react'
import BookDropdown from './BookDropdown'

export default function Book({ book }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <BookDropdown estado={book.shelf} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map((author, i) => <div key={i} className="book-authors">{author}</div>)}
      </div>
    </li>
  )
}

// export default Book;