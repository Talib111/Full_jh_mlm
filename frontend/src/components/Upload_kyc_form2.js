import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/personal_info.css'
import '../Styles/form.css'
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Upload_kyc_form2(props) {
   //toast
   const notify = ()=>{
    toast.success('KYC updated successfully!',{autoClose: false});
    console.log("toast not showing")
  }

    const validationSchema = Yup.object({
        // password: Yup.string().required('Required').email('invalid email format')
        id_Proof: Yup.string().required("Required"),
        pan_Card: Yup.string().required("Required"),
        bank_Statement: Yup.string().required("Required"),
        dr_Licence: Yup.string().required("Required")
      });
      const formik = useFormik({
        initialValues: {
          id_Proof: "",
          pan_Card: "",
          bank_Statement: "",
          dr_Licence: ""
        },
        onSubmit: (values) => {
         console.log(props.current_User_Id);
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
            notify();
           
          }
        };
        xhttp.open("POST", "http://localhost:3000/update-all-data", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
         //get id the put in _id
        xhttp.send(JSON.stringify({_id:props.current_User_Id,id_Proof_Data: values}));
      };
    
     
      // console.log("value ", formik.touched);
      return (
       
        <React.Fragment>
           <ToastContainer />
         
          <form
            className="container personal_info_form_container p-4 shadow-lg mt-5"
            action=""
            onSubmit={formik.handleSubmit} style={{width: '90%'}}
          >
             
            <div className="form_container_inner">
              <h3 className="pb-5">Update KYC</h3>
              <div className="row">
            <div className="col-sm-4">  <div className="form_container_sub">
                <input
                  type="text"
                  placeholder="id_Proof"
                  id="id_Proof"
                  name="id_Proof"
               
                {...formik.getFieldProps('id_Proof')}
                />
                {formik.touched.id_Proof && formik.errors.id_Proof ? (
                  <div className="form_error">{formik.errors.id_Proof}</div>
                ) : null}
              </div></div>
              
             <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="pan_Card"
                  id="pan_Card"
                  name="pan_Card"
                 
                  {...formik.getFieldProps('pan_Card')}
                />
                {formik.touched.pan_Card && formik.errors.pan_Card ? (
                  <div className="form_error">{formik.errors.pan_Card}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="bank_Statement"
                  id="bank_Statement"
                  name="bank_Statement"
                 
                  {...formik.getFieldProps('bank_Statement')}
                />
                {formik.touched.bank_Statement && formik.errors.bank_Statement ? (
                  <div className="form_error">{formik.errors.bank_Statement}</div>
                ) : null}
              </div></div>

              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="dr_Licence"
                  id="dr_Licence"
                  name="dr_Licence"
                 
                  {...formik.getFieldProps('dr_Licence')}
                />
                {formik.touched.dr_Licence && formik.errors.dr_Licence ? (
                  <div className="form_error">{formik.errors.dr_Licence}</div>
                ) : null}
              </div></div>

            
              
             
              
              </div>
              
              <button className="btn btn-primary add_client_next_btn mt-5" type="submit">
                Update
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
      current_User_Id: state.current_User_Id
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "SELL_CAKE",form_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Upload_kyc_form2
export default connect(mapStateToProps,mapDispatchToProps)(Upload_kyc_form2)


