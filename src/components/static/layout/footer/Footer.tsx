import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer=()=>{
    const navigate=useNavigate();
    const goToMap=()=>{
        navigate('/map-page')
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