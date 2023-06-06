import React, { createContext, useState } from 'react'

const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {

  const url_default = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
  const url_endponit = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemones, setPokemones] = useState([]);
    const [siguienteUrl, setSiguienteUrl] = useState('');
    const [loading, setLoaging] = useState(true)
    const [verMas, setVerMas] = useState(true);
    const [busqueda, setBusqueda] = useState('');


    const fetchPokemon = async (url) => {
      const response = await fetch(url)
      const poke = await response.json()
  
      const abilities = poke.abilities.map(a => a.ability.name)
  
      return {
        id: poke.id,
        name:poke.name,
        img:poke.sprites.other.dream_world.front_default || poke.sprites.front_default || 'data:image/png;base64,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',
        weight: poke.weight,
        abilities
      }
    }

    const getPokemon = async (url = url_default) => {
      const response = await fetch(url)
      const listaPokemones = await response.json()
      const {next, results} = listaPokemones

      const pokemons = await Promise.all(results.map((pokemos) => fetchPokemon(pokemos.url)))

      
      return { next, pokemons }

    }

    const obtenerPokemones = async () => {
      const { next, pokemons } = await getPokemon()
      setPokemones(pokemons)
      setSiguienteUrl(next)
      console.log(pokemons);
    }

    const masPokemones = async () => { 
      const { next, pokemons } = await getPokemon(siguienteUrl)
      setPokemones(prev => [...prev, ...pokemons])
      next === null && setVerMas(false)
      setSiguienteUrl(next)
    }

    const buscarPokemon = async (busqueda) => {
      
      const url = `${url_endponit}${busqueda}`
      return await fetchPokemon(url)
    }



  return (
    <ProjectContext.Provider
    value={{

      pokemones,
      getPokemon,
      obtenerPokemones,
      masPokemones,
      verMas,
      buscarPokemon,
      busqueda,
      setBusqueda
      }}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
