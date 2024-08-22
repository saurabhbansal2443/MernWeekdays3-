import React , {createContext , useState } from 'react';

export const ThemeStore = createContext(null);

const ThemeContext = ({children}) => {
    const [theme , setTheme ] = useState("light");

  return (
    <ThemeStore.Provider value={{ theme , setTheme} } >
     
      {children }
    </ThemeStore.Provider>
  )
}

export default ThemeContext

//  <Component theme={theme }> </Component>

// <Component> <Home> </Home> </Component>
