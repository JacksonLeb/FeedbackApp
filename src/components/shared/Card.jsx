import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  if (reverse) {
      return <div className='card reverse'>{children}</div>
  }
  else {
      return <div className='card'>{children}</div>
  }

}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes =  {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card