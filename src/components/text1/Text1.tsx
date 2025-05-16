import React from 'react'

export const Text1 = () => {
  const edad = 27;
  return (
    <div>Mi edad: {edad}  es {edad > 18 ? 'mayor de edad' : 'menor de edad'} </div>
  )
}