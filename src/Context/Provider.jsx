import { Context } from './Context'


export const Provider = ({children}) => {

  return (
    <Context.Provider value={{useLocationFiltered}}>
      
        {children}
    </Context.Provider>
  )
}
