import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer=()=>{
    const storedUser = localStorage.getItem('currentUser');

    const currentUser = storedUser ? JSON.parse(storedUser) : null;
    const navigate=useNavigate();
    const goToMap=()=>{
        navigate(currentUser?"/map-page":'/login')
        
    }
    return(
        <>
         <section className="footsection">
            <div className="footsection_div">
            <button className="singin_btn" onClick={goToMap}>Proceed</button>
            </div>
        </section>
        </>
    )
}
export default Footer