import React from "react";
import "../Styles/login_page.css";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {useHistory} from 'react-router-dom';
  //for redux
import { connect } from "react-redux";

function Login_page(props) {

  const history = useHistory();


  //**** validation rule via yup             *********************/
  const validationSchema = Yup.object({
    username: Yup.string().required("Required! single"),
    // password: Yup.string().required('Required').email('invalid email format')
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values.username,values.password);
     //temporary login
    //  if(values.username="admin101" && values.password=="hackadmin123"){
    //   window.location.replace("/dashboard");
    // }
    // else{
    //   toast.error("wrong credentials",{ autoClose: false,position: toast.POSITION.TOP_CENTER});
    // }
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
        // console.log(this.responseText);
        // alert(this.responseText);
        if(this.responseText=="success"){
          console.log(props.logged_User);
          props.buyCake(values.username);
          // console.log(props.logged_User);
          // window.location.href="/dashboard"
          // console.log(this.responseText);
          history.push('/dashboard');
          
        }
        else{
        toast.error("wrong credentials",{ autoClose: false,position: toast.POSITION.TOP_CENTER});

        }
       
        
      }
    };
    xhttp.open("POST", "http://localhost:3000/temp-login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({_id:values.username}));

    // xhttp.open("POST", "http://localhost:3000/login", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.send(JSON.stringify({username:values.username,password: values.password}));
    
  };

 
  console.log("value ", formik.touched);
  return (
   
    <React.Fragment>
           <ToastContainer />

      <form
        className="form_container p-4 shadow-lg"
        action=""
        onSubmit={formik.handleSubmit}
      >
        <div className="form_container_inner">
          <h3 className="pb-5">Sign In</h3>
          <div className="form_container_sub">
            <input
              type="text"
              placeholder="uesername"
              id="username"
              name="username"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
            //   value={formik.values.username}
            //**** formik.getfieldprops will replace above three lines code */
            {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="form_error">{formik.errors.username}</div>
            ) : null}
          </div>
          <br />
          <br />
          <div className="form_container_sub">
            <input
              className=""
              type="text"
              placeholder="password"
              id="password"
              name="password"
             
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="form_error">{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Login
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
      current_User_Id: state.current_User_Id,
      logged_User: state.logged_User
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "logged_User",logged_User: form_dt }),
    };
  };
  ///for reudux
// export default Login_page;
export default connect(mapStateToProps,mapDispatchToProps)(Login_page)

