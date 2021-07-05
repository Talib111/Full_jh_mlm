import React from 'react'
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import '../Styles/personal_info.css'
import '../Styles/form.css'
//for redux
import { connect } from "react-redux";

function Bank_account_details_form(props) {
    const validationSchema = Yup.object({
        // password: Yup.string().required('Required').email('invalid email format')
        account_Holder: Yup.string().required("Required"),
        account_no: Yup.string().required("Required"),
        ifsc_Code: Yup.string().required("Required"),
      });
      const formik = useFormik({
        initialValues: {
          account_Holder: "",
          account_no: "",
          ifsc_Code: "",
        },
        onSubmit: (values) => {
          // console.log("submited values ", values.account_Holder," ",values.account_no);
          console.log(props.user_id);
          send_to_backend(values);
        },
        //    validate
        validationSchema,
      });

      

      const send_to_backend=(values)=>{
        console.log("calling node",values)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status==200){
            if(this.responseText=="success"){
              props.buyCake(13);

            }
          }
        }
        xhttp.open("POST","http://localhost:3000/update-all-data",true);
        xhttp.setRequestHeader('Content-Type',"application/json");
        xhttp.send(JSON.stringify({_id: props.user_id,bank_Details: values}));

      }
    
     
      // console.log("value ", formik.touched);
      return (
       
        <React.Fragment>
         
          <form
          
            className="container personal_info_form_container p-4 shadow-lg mt-5"
            action=""
            onSubmit={formik.handleSubmit} style={{width: '90%'}}
          >
             
            <div className="form_container_inner">
              <h3 className="pb-5">Bank Account Details</h3>
              <div className="row">
            <div className="col-sm-4">  <div className="form_container_sub">
                <input
                  type="text"
                  placeholder="account_Holder"
                  id="account_Holder"
                  name="account_Holder"
               
                {...formik.getFieldProps('account_Holder')}
                />
                {formik.touched.account_Holder && formik.errors.account_Holder ? (
                  <div className="form_error">{formik.errors.account_Holder}</div>
                ) : null}
              </div></div>
              
             <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="account_no"
                  id="account_no"
                  name="account_no"
                 
                  {...formik.getFieldProps('account_no')}
                />
                {formik.touched.account_no && formik.errors.account_no ? (
                  <div className="form_error">{formik.errors.account_no}</div>
                ) : null}
              </div></div>
              <div className="col-sm-4"> <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="ifsc_Code"
                  id="ifsc_Code"
                  name="ifsc_Code"
                 
                  {...formik.getFieldProps('ifsc_Code')}
                />
                {formik.touched.ifsc_Code && formik.errors.ifsc_Code ? (
                  <div className="form_error">{formik.errors.ifsc_Code}</div>
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

// export default Bank_account_details_form
export default connect(mapStateToProps,mapDispatchToProps)(Bank_account_details_form)

