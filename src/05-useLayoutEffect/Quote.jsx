import React, { useLayoutEffect } from 'react'

export const Quote = ({author, quote}) => {

    useLayoutEffect(() => {

    }, [quote]);


  return (
    <blockquote
        className='blockquote text-end'
        style={{display: 'flex'}}
    >
        <p className='mb-1'>{ quote }</p>
        <footer className='blockquote-footer'>{ author }</footer>
    </blockquote>
  )
}
