import { Link, useNavigate } from "react-router-dom";
import DynamicBtn from "../../../dynamic/button/Button";
import "./Navbar.css";

const Navbar=()=>{
    const navigate=useNavigate()
    const loginBtn=()=>{
        navigate('/login')
    }
    const registerBtn=()=>{
        navigate('/register')
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
                <DynamicBtn  textBtn="Sign in" btnFunc={loginBtn} />
                <DynamicBtn classBtn="singup_btn" textBtn="Sign Up" btnFunc={registerBtn} />


                {/* <button>FeedBack</button> */}

                {/* <img src="profile.svg" alt="profile-civil" />
                <p>John Doe</p>
                <img src="arrowdown.svg" alt="arr-civil" /> */}

               </div>
         </section>
        </>
    )
}
export default Navbar