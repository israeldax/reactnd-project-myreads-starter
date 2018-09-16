import React from 'react'
import PropTypes from 'prop-types'

function BookDropdown({ estado = 'none', changeShelf }) {
  return (
    <select value={estado} onChange={changeShelf} >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )
}

BookDropdown.prototype = {
  estado: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
}

export default BookDropdown