import { createContext } from "react";
import Usefirebase from "../hooks/Usefirebase";


export const authContext = createContext()

const AuthProvider =({children})=>{
    const firebase = Usefirebase()
    return(
        <authContext.Provider value={firebase}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider