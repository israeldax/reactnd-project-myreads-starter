import React from 'react'
import PropTypes from 'prop-types'

function BookDropdown({ estado, changeShelf }) {
  return (
    <select value={estado} onChange={changeShelf} >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading" className={estado === 'currentlyReading'? 'chose' : ''}>Currently Reading</option>
      <option value="wantToRead" className={estado === 'wantToRead'? 'chose' : ''}>Want to Read</option>
      <option value="read" className={estado === 'read'? 'chose' : ''}>Read</option>
      <option value="none" className={estado === 'none'? 'chose' : ''}>None</option>
    </select>
  )
}

BookDropdown.propType = {
  estado: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
}

BookDropdown.defaultProps = {
  estado: 'none'
}

export default BookDropdown
