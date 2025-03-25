import React from 'react'

const Button = ({text}) => {
  return (
    <button className='p-4 bg-red-600 justify-center rounded-md items-center cursor-pointer'>
        {text}
    </button>
)
}

export default Button