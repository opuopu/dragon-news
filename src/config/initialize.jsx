import { initializeApp } from "firebase/app";
import firebaseConfig from "./Useconfig";

const  Initialize =() =>{
    return initializeApp(firebaseConfig)
}
export default Initialize