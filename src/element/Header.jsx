import React from 'react'

export const Header = () => {

    const logo = 'https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg'
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    
        <h4>Pokemon</h4>
        
    </div>
  )
}
