import React, { useEffect, useState } from 'react'
import { UseProject } from '../Hooks/UseProject'
import { CardPokemon } from './CardPokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Detail } from './Detail';
import { Buscador } from './Buscador';

export const Index = () => {
    

  const {pokemones, verMas, getPokemon, masPokemones, loading, obtenerPokemones, busqueda, setBusqueda} = UseProject()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })




  useEffect(() => {
    
    obtenerPokemones()
    
  }, []);


  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => {
    setMostrar({ mostrar: false, pokemon: {}})
    setBusqueda('')
  }

  

  

  return (
    <div>

    <h1>App de pokemones</h1>
    <Buscador mostrar={mostrar} setMostrar={setMostrar} />
    <Detail {...mostrar} cerrar={noVerPokemon} />
    <InfiniteScroll className='containerCard'
    dataLength={pokemones.length}
    next={masPokemones}
    hasMore={verMas}
    loader={<p>cargando...</p>}

    >

      
        
        {pokemones.map((pokemon, i) => <CardPokemon key={i} {...pokemon} verPokemon={() => verPokemon(pokemon)} />)}
        
      
    </InfiniteScroll>


       
       
    </div>
  )
}
