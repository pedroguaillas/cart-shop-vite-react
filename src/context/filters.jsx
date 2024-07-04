import { useState } from "react";
import { createContext } from "react";

// 1. Crea el Contexto
// Este se va a consumir
export const FiltersContext = createContext()

// 2. Crea el Provider, para proveer el context
// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters, setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}