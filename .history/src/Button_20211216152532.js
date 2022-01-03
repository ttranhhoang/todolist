import React from 'react'

function Button({children}) {
    return (
      <button type="submit" onClick={onClick}>
        Add
      </button>
    );
}

export default Button
