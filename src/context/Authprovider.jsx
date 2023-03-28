import { createContext } from "react";
import Usefirebase from "../hooks/Usefirebase";


export const authContext = createContext()

const AuthProvider =({children})=>{
    const firebase = Usefirebase()
    const data ={name:'opu'}
    console.log(firebase)

    return(
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider