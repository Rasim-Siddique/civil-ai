import  { createContext, ReactNode, useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";




const AppContext = createContext<any>(undefined);



const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser]=useState("");



  onAuthStateChanged(auth, (currentUser:any)=>{
    if (currentUser) {
      setCurrentUser(currentUser)
  } else {
    setCurrentUser("")
  }
})


const value={
  currentUser,
  // login,
  // signUp
}



  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };