import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useAuth } from "../../../../hooks/useAuth";

function MyVerticallyCenteredModal(props:any) {

  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
       <div className="main_modalBx">
        <div>
       <img src="login-logo.svg" alt="logo-civil" />
       </div>
       <div>
       <h1>Share Your Feedback</h1>
       </div>
       <div style={{width:'100%'}}>
       <Form.Group  controlId="exampleForm.ControlTextarea1">
        <Form.Label className="textLableArea">Please share us your experience / suggestion / issue</Form.Label>
        <Form.Control style={{fontSize:14}} as="textarea" rows={8} className="text_areaBx" placeholder="Describe what do you like the most..."  />
      </Form.Group>
       </div>


<div>
<button className="singin_btn" style={{backgroundColor:"#274082", border:'1px solid  #274082'}} onClick={props.submitFeedBack}>Submit</button>

</div>
     
       </div>
    </Modal>
  );
}

const Footer=()=>{
    const location=useLocation()
    const {pathname}=location
    const {currentUser}=useAuth()

    const [modalShow, setModalShow] = useState(false);


    const navigate=useNavigate();
    const goToMap=()=>{
        navigate(currentUser?"/map-page":'/login')
        
    }

    const submitFeedBack=()=>{
        setModalShow(false)
    }
    return(
        <>

        {/* modal feedpack  */}


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        submitFeedBack={submitFeedBack}
      />
                 <section className="footsection">
                 <div className="footsection_div">
                    {pathname==='/' &&
                 <button className="singin_btn" onClick={goToMap}>Proceed</button>
    }
                  {pathname==='/map-page' &&
                 <button className="singin_btn" 
                 onClick={() => setModalShow(true)}
                 >Feedback</button>

                 }
                 </div>
             </section>

{pathname==='/login' || pathname ==='/register' &&
                 <section className="footsectionLogin">
                    <p>Copyright © 2023 Civil Ai - All Rights Reserved.</p>
                    <p>Powered by GoDaddy</p>

             </section>
        }
        


        </>
    )
}
export default Footer