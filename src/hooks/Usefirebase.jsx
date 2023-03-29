import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Initialize from "../config/initialize";

Initialize()
const Usefirebase =() =>{
    const auth = getAuth() 
    const[user,setuser] = useState({})
// google sign in
    const signInWithGoogle =()=>{
        const provider = new GoogleAuthProvider()
         signInWithPopup(auth,provider)
         .then(result=>{
            console.log(result.user)
         })
    }
    // create user 
    const createuser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signin user
    const signinuser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    // user state changed
    
     useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
            }
        })
        return ()=>unsubscribe()
     })

    //  sign out
     const signout =() =>{
        signOut(auth)
        .then(()=>{
           console.log('sign out sucessfull')
           setuser({})
        })
     }

    return {signInWithGoogle,user,signout,createuser,signinuser}
}

export default Usefirebase