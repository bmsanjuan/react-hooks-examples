import React, { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({id, name, sprites = []}) => {

  const pRef = useRef();
  const [boxSize, setBoxsize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxsize({height, width});
  
  }, [id])


  return (
    <section style={{display: 'flex'}}>
        <h2 className='text-capitalize'>#{id} - {name}</h2>
    
    {/* Imagenes */}
    <div ref={pRef}>
        {
            sprites.map( sprite => (
                <img key={ sprite } src={ sprite} alt={name}/>
            ))
        }

    </div>

    <code>{JSON.stringify(boxSize)}</code>

    </section>
  )
}
