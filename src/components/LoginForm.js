import React from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup"

class LoginForm extends React.Component{
    render(){
        return(
            <div className='login'>
              <div className="top"></div>
              <div className="bottom"></div>
              <div class="center">
                  <Formik
                    initialValues={{ firstName: '', email: '' , password: ''}}
                    validationSchema={Yup.object({
                      firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    
                      email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),

                      password: Yup.string()
                        .min(4,'should be greater than 4!')
                        .required("Required"),

                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {formik => (
                      <Form>
                      <label htmlFor="firstName"></label>
                      <Field name="firstName" type="text" placeholder='First Name'/>
                      <ErrorMessage name="firstName" />
                  
                      
                      <label htmlFor="email"></label>
                      <Field name="email" type="email" placeholder='email'/>
                      <ErrorMessage name="email" />
                      
                      
                      <label htmlFor='password'></label>
                      <Field name='password' type='password' placeholder='password' />
                      <ErrorMessage name='password' />
                    
                      
                      <button type="submit" className='submit-btn'><h2>Log In</h2></button>
                    </Form>
                    )}
                  </Formik>
                  </div>
        </div>
        )
    }
}
export default LoginForm