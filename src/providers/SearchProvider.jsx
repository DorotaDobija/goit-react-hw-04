import { useState } from "react";
import { searchContext } from "../hooks/useSearchContext";

export const SearchProvider = ({children}) => {

    const [searchWord, setSearchWord] = useState(null);


    return (<searchContext.Provider value={{ searchWord, setSearchWord }}>
        {children}
    </searchContext.Provider>)
}