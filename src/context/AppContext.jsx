import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ autenticado: false });
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </AppContext.Provider>
  )
}