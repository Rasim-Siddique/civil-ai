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

const LoginCom=()=>{
  const navigate=useNavigate()



  const formDataMap = formData?.filter((val: any, index:number) => {

    return (index==0 || index==2)
}).map((values)=>{
  return values?.name
})

const initialValues: any = {};

formDataMap.forEach((key: any) => {
  return (initialValues[key] = "");
});





const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("password is required"),
});

const onSubmit = async (values: any) => {
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
    navigate('/');

  },2000)
  // window.location.reload(false)
}
  }catch(error:any){
  toast("Somehting went wrong")

      console.log(error.message)
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
          {(formik) => (
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
                                   <DynamicBtn btnType='submit' textBtn='Login' classBtn='login_signBtn' /> 

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