import React from 'react'

function Button({title,onClick}) {
    if(!
    return (
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    );
}

export default Button
