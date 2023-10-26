

import { Field, ErrorMessage } from 'formik'

const Input=(props:any)=>{
  const { label, name, formik, lableCLass,inputClass,errorClass,...rest } = props

  return(
    <>
   <div>
      
      <label className={lableCLass} htmlFor={name}>{label}</label>
      <br />
      <Field as='input' className={inputClass}  id={name} name={name} {...rest}  />
      <ErrorMessage name={name} component='div' className={errorClass}  />
    </div>
    </>
  )
}
export default Input