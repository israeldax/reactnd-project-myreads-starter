import React from 'react';
import PropTypes from 'prop-types'

function PageTitle({ title }) {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string
};

export default PageTitle;
