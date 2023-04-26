import {useState} from 'react'
import { Context } from './Context'
import { useLocation } from 'react-router-dom';

export const Provider = ({children}) => {
  const [location, setLocation] = useState('')

  const ubicacion = useLocation();
  const useLocationFiltered = ubicacion.pathname.split('/')[1]
  



  return (
    <Context.Provider value={{useLocationFiltered}}>
        {children}
    </Context.Provider>
  )
}
