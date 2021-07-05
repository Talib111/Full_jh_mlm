import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/personal_info.css'
import '../Styles/form.css'
//for redux
import { connect } from "react-redux";

function Address_form(props) {
    const validationSchema = Yup.object({
        // password: Yup.string().required('Required').email('invalid email format')
        country: Yup.string().required("Required"),
        state: Yup.string().required("Required! single"),
        city: Yup.string().required("Required! single"),
        address: Yup.string().required("Required! single"),
        landmark: Yup.string().required("Required! single"),
        postal_Code: Yup.string().required("Required! single"),

      });
      const formik = useFormik({
        initialValues: {
          country: "",
          state: "",
          city: "",
          address: "",
          landmark: "",
          postal_Code: "",
        },
        onSubmit: (values) => {
          // console.log(props.user_id)
          console.log(props.user_id);
          send_to_backend(values);
        },
        //    validate
        validationSchema,
      });

      const send_to_backend = (values) => {
        console.log("calling node", values);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            //hide form and show next form
            // change value in redux variable to show or hide form
            //changing redux value
            if(this.responseText=="success"){
              props.buyCake(12);

            }
          }
        };
        xhttp.open("POST", "http://localhost:3000/update-all-data", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify({_id: props.user_id,address_Data: values}));
      };
    
     
      // console.log("value ", formik.touched);
      return (
       
        <React.Fragment>
         
          <form
            className="container personal_info_form_container p-4 shadow-lg"
            action=""
            onSubmit={formik.handleSubmit}
          >
             
            <div className="form_container_inner">
              <h3 className="pb-5">Address</h3>
              <div className="row">
            <div className="col-sm-4">  <div className="form_container_sub">
                <input
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

              {/* spacing */}
              <div className="input_spacing"></div>
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
              
             
              
              </div>
              
              <button className="btn btn-primary add_client_next_btn mt-5" type="submit">
                Next
              </button>{" "}
            </div>
           
          </form>
        </React.Fragment>
      );
}


 //for redux
  //getting the num of cakes here
  const mapStateToProps = (state) => {
    return {
      numofCakes: state.numofCakes,
      user_id: state.user_id

    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "SELL_CAKE",form_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Address_form
export default connect(mapStateToProps,mapDispatchToProps)(Address_form)

