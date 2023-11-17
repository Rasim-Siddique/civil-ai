import {Form, Formik} from "formik";
import * as Yup from "yup";
import formData from '../../../data/form-data.json';
// import DynamicBtn from '../../../dynamic/button/Button';
import './Login.css';
import FormikControl from "../../../dynamic/formdynamic/FormikControl";
import DynamicBtn from "../../../dynamic/button/Button";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, Spinner } from 'react-bootstrap';
import { useState } from "react";


const LoginCom=()=>{
  const navigate=useNavigate()
  const [registerLoader, setRegisterLoader]=useState(false)



  
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formDataMap = formData?.filter((val: any, index:number) => {
  console.info(val)
    return (index==0 || index==2)
}).map((values)=>{
  return values?.name
})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialValues: any = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
formDataMap.forEach((key: any) => {
  return (initialValues[key] = "");
});





const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("password is required"),
});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (values: any) => {
  setRegisterLoader(true)

  try{
      const user=await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
      )
      console.log(user)
if(user){
  toast("You Have Signed in Successfully")
  setTimeout(()=>{
    setRegisterLoader(false)

    navigate('/');

  },3000)
  // window.location.reload(false)
}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }catch(error:any){
    setRegisterLoader(false)

  toast("Somehting went wrong")

  }
};

    return(
        <>
         <ToastContainer style={{fontSize:16}} />

            <div className="main_login_sec">
                <div className='login_formBx'>
                    <img src="/login-logo.svg" alt="login-img" />  
                    <h1>Welcome Back! Login Now</h1>
                    <div>
                    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form

             className='formBx'
           
           >
               <FormikControl
                  control={formData[0].control}
                  type={formData[0].type}
                  label={formData[0].label}
                  name={formData[0].name}
                  placeholder={formData[0].placeholder}
                  formik={formData[0].formik}
                  lableCLass={'labelInp'}
                  inputClass={`inputFld`}
                  errorClass={`errMsg`}
                />

<FormikControl
                  control={formData[2].control}
                  type={formData[2].type}
                  label={formData[2].label}
                  name={formData[2].name}
                  placeholder={formData[2].placeholder}
                  formik={formData[2].formik}
                  lableCLass={'labelInp'}
                  inputClass={`inputFld`}
                  errorClass={`errMsg`}
                />
                                    {!registerLoader ?
                                    <DynamicBtn btnType='submit' textBtn="Login" classBtn='login_signBtn' />
                                :
                                
                                <Button 
                                style={{backgroundColor:'white', color:"purple", fontSize:16}}
                                className='login_signBtn'
                                disabled>
      <Spinner 
      
      animation="border" size="md" role="status" aria-hidden="true" />
      <span 
       
      className="sr-only">Loading...</span>
    </Button>
                                }

            </Form>
          )}
        </Formik>
                        
                  
                    </div>

                    <p>Forget your password?</p>
                </div>
            </div>
        </>
    )
}
export default LoginCom