import React, { useContext } from 'react'
import ProjectContext from '../context/ProjectProvider'

export const UseProject = () => {
  return  useContext(ProjectContext)
}
