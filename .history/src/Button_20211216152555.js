import React from 'react'

function Button({children}) {
    return (
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    );
}

export default Button
