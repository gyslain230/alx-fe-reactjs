import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().password('Invalid password').required('Password is REQUIRED')
});

 function formikForm(){


    return(
      <Formik
      initialValues={{username:'', email:'', password:''}}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log(values);
        
      }}
      >
        {()=>{
             <Form>
                 <Field type="text" name="username" placeholder="Username" />
                 <ErrorMessage name="username" component="div" />
                 <Field type="email" name="email" placeholder="Email" />
                 <ErrorMessage name="email" component="div" />            
                 <Field type="password" name="password" placeholder="Password" />
                 <ErrorMessage name="password" component="div" />
            
                 <button type="submit">Submit</button>
             </Form>
             }

         }  

      </Formik>

    )
 };
 export default formikForm;