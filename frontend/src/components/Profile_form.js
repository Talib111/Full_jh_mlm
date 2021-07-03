import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/personal_info.css'
import '../Styles/form.css'

function Profile_form() {
    const validationSchema = Yup.object({
        // password: Yup.string().required('Required').email('invalid email format')
        gender: Yup.string().required("Required!"),
        father_Husband_Name: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        date_Of_Birth: Yup.string().required("Required"),
        pan: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        landmark: Yup.string().required("Required"),
        postal_Code: Yup.string().required("Required"),
        nominee: Yup.string().required("Required"),
       
      });
      const formik = useFormik({
        initialValues: {
         
          gender: "",
          father_Husband_Name: "",
          email: "",
          date_Of_Birth: "",
          pan: "",
          country: "",
          state: "",
          city: "",
          Address: "",
          landmark: "",
          postal_Code: "",
          nominee: ""
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
              <h3 className="pb-5">Profile</h3>
              <div className="row">
          
              
             <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="gender"
                  id="gender"
                  name="gender"
                 
                  {...formik.getFieldProps('gender')}
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="form_error">{formik.errors.gender}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="father_Husband_Name"
                  id="father_Husband_Name"
                  name="father_Husband_Name"
                 
                  {...formik.getFieldProps('father_Husband_Name')}
                />
                {formik.touched.father_Husband_Name && formik.errors.father_Husband_Name ? (
                  <div className="form_error">{formik.errors.father_Husband_Name}</div>
                ) : null}
              </div></div>

              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="email"
                  id="email"
                  name="email"
                 
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="form_error">{formik.errors.email}</div>
                ) : null}
              </div></div>

              {/* spacing */}
              <div className="input_spacing"></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="date_Of_Birth"
                  id="date_Of_Birth"
                  name="date_Of_Birth"
                 
                  {...formik.getFieldProps('date_Of_Birth')}
                />
                {formik.touched.date_Of_Birth && formik.errors.date_Of_Birth ? (
                  <div className="form_error">{formik.errors.date_Of_Birth}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="pan"
                  id="pan"
                  name="pan"
                 
                  {...formik.getFieldProps('pan')}
                />
                {formik.touched.pan && formik.errors.pan ? (
                  <div className="form_error">{formik.errors.pan}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="country"
                  id="country"
                  name="country"
                 
                  {...formik.getFieldProps('country')}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="form_error">{formik.errors.country}</div>
                ) : null}
              </div></div>
               {/* spacing */}
               <div className="input_spacing"></div>
            
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="state"
                  id="state"
                  name="state"
                 
                  {...formik.getFieldProps('state')}
                />
                {formik.touched.state && formik.errors.state ? (
                  <div className="form_error">{formik.errors.state}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="city"
                  id="city"
                  name="city"
                 
                  {...formik.getFieldProps('city')}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="form_error">{formik.errors.city}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="address"
                  id="address"
                  name="address"
                 
                  {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="form_error">{formik.errors.address}</div>
                ) : null}
              </div></div>
               {/* spacing */}
               <div className="input_spacing"></div>
             
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="landmark"
                  id="landmark"
                  name="landmark"
                 
                  {...formik.getFieldProps('landmark')}
                />
                {formik.touched.landmark && formik.errors.landmark ? (
                  <div className="form_error">{formik.errors.landmark}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="postal_Code"
                  id="postal_Code"
                  name="postal_Code"
                 
                  {...formik.getFieldProps('postal_Code')}
                />
                {formik.touched.postal_Code && formik.errors.postal_Code ? (
                  <div className="form_error">{formik.errors.postal_Code}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="nominee"
                  id="nominee"
                  name="nominee"
                 
                  {...formik.getFieldProps('nominee')}
                />
                {formik.touched.nominee && formik.errors.nominee ? (
                  <div className="form_error">{formik.errors.nominee}</div>
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

export default Profile_form
