import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import Initialize from "../config/initialize";

Initialize()
const Usefirebase =() =>{
    const auth = getAuth() 
    const[user,setuser] = useState({})
    const [loading,setloading] =useState(true)
// google sign in
    const signInWithGoogle =()=>{
        setloading(true)
        const provider = new GoogleAuthProvider()
         signInWithPopup(auth,provider)
         .then(result=>{
            console.log(result.user)
         })
    }
    // create user 
    const createuser =(email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signin user
    const signinuser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    // user state changed
    
     useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,user=>{
           
             if(user.emailVerified|| user ===null){
                console.log(user)
                setuser(user)
                setloading(false)

             }
             
            
            else{
                setuser({})
            }
        })
        return ()=>unsubscribe()
     },[])
    //    updateprofile
   const  handleupdateprofies =(profile) =>{
            return updateProfile(auth.currentUser,profile)
    }

    // send email verification
    const sendverification =() =>{
        return sendEmailVerification(auth.currentUser)
    }
    //  sign out
     const signout =() =>{
        setloading(true)
        signOut(auth)
        .then(()=>{
           console.log('sign out sucessfull')
           setuser({})
        })
     }

    return {signInWithGoogle,user,signout,createuser,signinuser,loading,handleupdateprofies,sendverification,setloading}
}

export default Usefirebase