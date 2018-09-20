import React from 'react'
import PropTypes from 'prop-types'

function BookDropdown({ shelf, changeShelf }) {
  return (
    <select value={shelf} onChange={changeShelf} >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading" className={shelf === 'currentlyReading'? 'chose' : ''}>Currently Reading</option>
      <option value="wantToRead" className={shelf === 'wantToRead'? 'chose' : ''}>Want to Read</option>
      <option value="read" className={shelf === 'read'? 'chose' : ''}>Read</option>
      <option value="none" className={shelf === 'none'? 'chose' : ''}>None</option>
    </select>
  )
}

BookDropdown.propType = {
  shelf: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
}

BookDropdown.defaultProps = {
  shelf: 'none'
}

export default BookDropdown
