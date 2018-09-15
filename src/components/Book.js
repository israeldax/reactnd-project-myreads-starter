import React from 'react'
import PropTypes from 'prop-types'
import BookDropdown from '../components/BookDropdown'

function Book({ book }) {

  const authors = book.authors ? book.authors : [];
  const imageLinks = book.imageLinks ? book.imageLinks : {};

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <BookDropdown estado={book.shelf} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {authors.map((author, i) => <div key={i} className="book-authors">{author}</div>)}
      </div>
    </li>
  )
}

Book.prototype = {
  book: PropTypes.object.isRequired
};

export default Book;