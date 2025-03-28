import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className='p-4 bg-red-600 justify-center rounded-md items-center cursor-pointer'>
        {children}
    </button>
)
}

export default Button