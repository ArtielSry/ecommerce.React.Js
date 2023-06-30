import { createContext, useState } from "react";

//Creacion del context que tenemos que consumir
export const FiltersContext = createContext()

//Creacion del Provider - children es todo lo que envuelve - provee el acceso al contexto
export function FiltersProvider({ children }) {
    
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })

    return(
        <FiltersContext.Provider value = {{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )

}