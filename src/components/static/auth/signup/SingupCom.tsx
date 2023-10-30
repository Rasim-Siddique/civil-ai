import { Form, Formik } from "formik";
import * as Yup from "yup";
import formData from '../../../data/form-data.json';
// import DynamicBtn from '../../../dynamic/button/Button';
// import './Login.css';
import FormikControl from "../../../dynamic/formdynamic/FormikControl";
import DynamicBtn from "../../../dynamic/button/Button";
import '../login/Login.css'

const SingUpCom = () => {

    const formDataMap = formData?.filter((val: any, index: number) => {

        return (index == 0 || index == 2 || index == 1 || index == 3)
    }).map((values) => {
        return values?.name
    })

    const initialValues: any = {};

    formDataMap.forEach((key: any) => {
        return (initialValues[key] = "");
    });





    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),

        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("password is required"),
        confirmPassword: Yup.string().required(" confirm password is required"),


    });

    const onSubmit = (values: any) => {
        console.log("Form data by dynaic names", values);
    };

    return (
        <>
            <div className="main_login_sec" >
                <div className='login_formBx' style={{ height: "80vh" }}>
                    <img src="/login-logo.svg" alt="login-img" />
                    <h1>Welcome Here! Register Now</h1>
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
                                        control={formData[1].control}
                                        type={formData[1].type}
                                        label={formData[1].label}
                                        name={formData[1].name}
                                        placeholder={formData[1].placeholder}
                                        formik={formData[1].formik}
                                        lableCLass={'labelInp'}
                                        inputClass={`inputFld`}
                                        errorClass={`errMsg`}
                                    />

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
                                    <FormikControl
                                        control={formData[3].control}
                                        type={formData[3].type}
                                        label={formData[3].label}
                                        name={formData[3].name}
                                        placeholder={formData[3].placeholder}
                                        formik={formData[3].formik}
                                        lableCLass={'labelInp'}
                                        inputClass={`inputFld`}
                                        errorClass={`errMsg`}
                                    />
                                    <DynamicBtn btnType='submit' textBtn='Sign Up' classBtn='login_signBtn' />

                                </Form>
                            )}
                        </Formik>


                    </div>

                </div>
            </div>
        </>
    )
}
export default SingUpCom