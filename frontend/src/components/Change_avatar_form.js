import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/personal_info.css'

function Change_avatar_form() {
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
            className="personal_info_form_container p-4 shadow-lg"
            action=""
            onSubmit={formik.handleSubmit}
          >
             
            <div className="form_container_inner">
              <h3 className="pb-5">Change Avatar</h3>
              <div className="row">
          
              
             <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="file"
                  placeholder="old_Password"
                  id="old_Password"
                  name="old_Password"
                 
                  {...formik.getFieldProps('old_Password')}
                />
                {formik.touched.old_Password && formik.errors.old_Password ? (
                  <div className="form_error">{formik.errors.old_Password}</div>
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

export default Change_avatar_form
