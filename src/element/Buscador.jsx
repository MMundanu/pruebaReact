import React from "react";
import { UseProject } from "../Hooks/UseProject";

export const Buscador = ({mostrar, setMostrar}) => {

    const {busqueda, buscarPokemon,setBusqueda} = UseProject()

    const buscar = async (e) => {
        e.preventDefault()
        if(!busqueda) return
        const pokemon = await buscarPokemon(busqueda)
        setMostrar({mostrar: true, pokemon})
    }

  return (
    <form onSubmit={buscar}>
        <input 
        placeholder="Buscar pokemon"
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
         />
      <button type="submit">Buscar</button>
    </form>
  );
};
