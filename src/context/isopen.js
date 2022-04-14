import React, { useState, createContext } from 'react'
export const Pro = createContext()
export const Open = ({ children }) => {
  const [data, setData] = useState(false)
  return (
    <Pro.Provider value={[data, setData]}>
      {children}
    </Pro.Provider>
  )
}

export default Open
