import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/activate_client.css'

function Activate_client_form(props) {
    const validationSchema = Yup.object({
        // password: Yup.string().required('Required').email('invalid email format')
        old_Password: Yup.string().required("Required!"),
        new_Password: Yup.string().required("Required"),
        confirm_Password: Yup.string().required("Required")
      
      });
      const formik = useFormik({
        initialValues: {
         
          old_Password: "",
          new_Password: "",
          confirm_Password: "",
          
        },
        onSubmit: (values) => {
          console.log("submited values ", values);
        },
        //    validate
        validationSchema,
      });
    
     
      console.log("value ", formik.touched);
      return (
       
        <React.Fragment>
          <form
            className=" activate_client_form shadow-lg "
            action=""
            onSubmit={formik.handleSubmit}
           >
             
            <div className="form_container_inner">
              <h3 className="pb-5">{props.title}</h3>
              <div className="row ">
          
              
             <div className="col-sm-10  mb-3 mx-auto d-block"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="old_Password"
                  id="old_Password"
                  name="old_Password"
                 
                  {...formik.getFieldProps('old_Password')}
                />
                {formik.touched.old_Password && formik.errors.old_Password ? (
                  <div className="form_error">{formik.errors.old_Password}</div>
                ) : null}
              </div></div>
              <div className="col-sm-10  mb-3 mx-auto d-block"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="new_Password"
                  id="new_Password"
                  name="new_Password"
                 
                  {...formik.getFieldProps('new_Password')}
                />
                {formik.touched.new_Password && formik.errors.new_Password ? (
                  <div className="form_error">{formik.errors.new_Password}</div>
                ) : null}
              </div></div>

              <div className="col-sm-10  mb-3 mx-auto d-block"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="confirm_Password"
                  id="confirm_Password"
                  name="confirm_Password"
                 
                  {...formik.getFieldProps('confirm_Password')}
                />
                {formik.touched.confirm_Password && formik.errors.confirm_Password ? (
                  <div className="form_error">{formik.errors.confirm_Password}</div>
                ) : null}
              </div></div>

               
             
              </div>
              
              <button className="btn btn-primary add_client_next_btn mt-5" type="submit">
                Save
              </button>{" "}
            </div>
           
          </form>
        </React.Fragment>
      );
                }

export default Activate_client_form
