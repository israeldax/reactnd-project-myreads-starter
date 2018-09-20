import React from 'react'
import PropTypes from 'prop-types'
import {find} from 'lodash'
import BookDropdown from '../components/BookDropdown'

function Book({ book, changeShelf }) {
  const authors = book.authors || []
  const imageLinks = book.imageLinks || {}

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <BookDropdown estado={book.shelf} changeShelf={(e) => changeShelf(book, e.target.value)} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {authors.map((author, i) => <div key={i} className="book-authors">{author}</div>)}
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Book
