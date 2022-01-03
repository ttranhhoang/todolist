import React from 'react'

function Button({title,onClick}) {
    return (
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    );
}

export default Button
