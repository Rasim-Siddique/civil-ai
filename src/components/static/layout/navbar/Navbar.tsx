import { Link, useNavigate } from "react-router-dom";
import DynamicBtn from "../../../dynamic/button/Button";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";
// import { auth } from "../../../../firebase-config";

const Navbar=()=>{
    const storedUser = localStorage.getItem('currentUser');

const currentUser = storedUser ? JSON.parse(storedUser) : null;
    const navigate=useNavigate()
    const loginBtn=()=>{
        navigate('/login')
    }
    const registerBtn=()=>{
        navigate('/register')
    }
    const SingOutBtn= async ()=>{
         await signOut(auth)
         navigate('/login')

         window.location.reload(true)
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
                <DynamicBtn  textBtn="Logout" btnFunc={SingOutBtn} />

                
                }
                

                 {/* <button>FeedBack</button>  */}

                 <img src="profile.svg" alt="profile-civil" />
                <p>{currentUser?.email}</p>
                <img src="arrowdown.svg" alt="arr-civil" /> 

               </div>
         </section>
        </>
    )
}
export default Navbar