import { Link, useNavigate } from "react-router-dom";
import DynamicBtn from "../../../dynamic/button/Button";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useAuth } from "../../../../hooks/useAuth";
// import { auth } from "../../../../firebase-config";

const Navbar=()=>{
    const {currentUser}=useAuth()

    const navigate=useNavigate()
    const loginBtn=()=>{
        navigate('/login')
    }
    const registerBtn=()=>{
        navigate('/register')
    }
    const SingOutBtn= async ()=>{
         await signOut(auth)
         navigate('/login');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (window.location.reload as any)();
    }  
    return(
        <>
         <section>
              <Link to='/'>
               <div className="logo_sec">
                <img src="Logo landscape 1.svg" alt="logo-civil" />
               </div>
               </Link>
               <div className="Profile_btn_sec">
                {!currentUser?(
                    <>
                <DynamicBtn  textBtn="Sign in" btnFunc={loginBtn} />
                <DynamicBtn classBtn="singup_btn" textBtn="Sign Up" btnFunc={registerBtn} />
    
                    </>
                ):
                <>
                <DynamicBtn  textBtn="Logout" btnFunc={SingOutBtn} />
                <img src="profile.svg" alt="profile-civil" />
                <p>{currentUser?.email}</p>
                <img className="arrowLast" src="arrowdown.svg" alt="arr-civil" /> 
                 {/* <button>FeedBack</button>  */}

                </>
                }
                


                

               </div>
         </section>
        </>
    )
}
export default Navbar