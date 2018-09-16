import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from '../components/BookShelf'
import PageTitle from '../components/PageTitle'

function Home({ books, changeShelf }) {
  return (
    <div className="list-books">
      <PageTitle title="MyReads" />

      <div className="list-books-content">
        <div>
          <BookShelf shelfName="Currently Reading" books={books} changeShelf={changeShelf} />
          <BookShelf shelfName="Want to Read" books={books} changeShelf={changeShelf} />
          <BookShelf shelfName="Read" books={books} changeShelf={changeShelf} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

Home.prototype = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Home
