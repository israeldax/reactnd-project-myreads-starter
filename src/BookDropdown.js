import React from 'react'

export default function BookDropdown({ estado = 'none' }) {
  return (
    <select value={estado}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
}

// export default BookDropdown;