import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import "../Styles/personal_info.css";
import "../Styles/form.css";

//for redux
import { connect } from "react-redux";

function Personal_info_form(props) {
  const validationSchema = Yup.object({
    // password: Yup.string().required('Required').email('invalid email format')
    sponser_Username: Yup.string().required("Required!"),
    // Position: Yup.string().required("Required"),
    // username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    Confirm_password: Yup.string().required("Required").test('password-match','password did not match',function(value){
      return this.parent.password ===value
    }), 
    First_name: Yup.string().required("Required"),
    Last_name: Yup.string().required("Required"),
    Gender: Yup.string().required("Required"),
    Father_name_Husband_name: Yup.string().required("Required"),
    Phone: Yup.string().required("Required"),
    Email: Yup.string().required("Required"),
    Date_of_birth: Yup.string().required("Required"),
    Profile_image: Yup.string().required("Required"),
    // Pan: Yup.string().required("Required"),
    // Nominee: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      sponser_Username: "",
      // position: "",
      // username: "",
      password: "",
      Confirm_password: "",
      First_name: "",
      Last_name: "",
      Gender: "",
      Father_name_Husband_name: "",
      Phone: "",
      Email: "",
      Date_of_birth: "",
      Profile_image: "",
      // Pan: "",
      // Nominee: "",
    },
    onSubmit: (values) => {
      //create new username
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
        //hide form and show next form
        // change value in redux variable to show or hide form
        //changing redux value
        // if(this.responseText=="success"){
        //   props.store_id(values.username);
        //   // console.log(props.user_id);
        //   props.buyCake(11);
        // }
        
      }
    };
    xhttp.open("POST", "http://localhost:3000/push-all-data", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(values));
  };

 
  // console.log("value ", formik.touched);
  return (
    <React.Fragment>
     
      <form
        className="personal_info_form_container p-4 shadow-lg"
        action=""
        onSubmit={formik.handleSubmit}
      >
        <div className="form_container_inner">
          <h3 className="pb-5">Personal Info</h3>
          <div className="row">
            <div className="col-md-4">
              {" "}
              <div className="form_container_sub">
                <input
                  type="text"
                  placeholder="sponser_Username"
                  id="sponser_Username"
                  name="sponser_Username"
                  {...formik.getFieldProps("sponser_Username")}
                />
                {formik.touched.sponser_Username &&
                formik.errors.sponser_Username ? (
                  <div className="form_error">
                    {formik.errors.sponser_Username}
                  </div>
                ) : null}
              </div>
            </div>

            {/* <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Position"
                  id="Position"
                  name="Position"
                  {...formik.getFieldProps("Position")}
                />
                {formik.touched.Position && formik.errors.Position ? (
                  <div className="form_error">{formik.errors.Position}</div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="username"
                  id="username"
                  name="username"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.Username && formik.errors.username ? (
                  <div className="form_error">{formik.errors.username}</div>
                ) : null}
              </div>
            </div> */}
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="First_name"
                  id="First_name"
                  name="First_name"
                  {...formik.getFieldProps("First_name")}
                />
                {formik.touched.First_name && formik.errors.First_name ? (
                  <div className="form_error">{formik.errors.First_name}</div>
                ) : null}
              </div>
            </div>
            {/* spacing */}
            {/* <div className="input_spacing"></div> */}
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Last_name"
                  id="Last_name"
                  name="Last_name"
                  {...formik.getFieldProps("Last_name")}
                />
                {formik.touched.Last_name && formik.errors.Last_name ? (
                  <div className="form_error">{formik.errors.Last_name}</div>
                ) : null}
              </div>
            </div>

            {/* spacing */}
            <div className="input_spacing"></div>
           
            
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Gender"
                  id="Gender"
                  name="Gender"
                  {...formik.getFieldProps("Gender")}
                />
                {formik.touched.Gender && formik.errors.Gender ? (
                  <div className="form_error">{formik.errors.Gender}</div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Father_name_Husband_name"
                  id="Father_name_Husband_name"
                  name="Father_name_Husband_name"
                  {...formik.getFieldProps("Father_name_Husband_name")}
                />
                {formik.touched.Father_name_Husband_name &&
                formik.errors.Father_name_Husband_name ? (
                  <div className="form_error">
                    {formik.errors.Father_name_Husband_name}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Phone"
                  id="Phone"
                  name="Phone"
                  {...formik.getFieldProps("Phone")}
                />
                {formik.touched.Phone && formik.errors.Phone ? (
                  <div className="form_error">{formik.errors.Phone}</div>
                ) : null}
              </div>
            </div>
            {/* spacing */}
            <div className="input_spacing"></div>

            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  {...formik.getFieldProps("Email")}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <div className="form_error">{formik.errors.Email}</div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Date_of_birth"
                  id="Date_of_birth"
                  name="Date_of_birth"
                  {...formik.getFieldProps("Date_of_birth")}
                />
                {formik.touched.Date_of_birth && formik.errors.Date_of_birth ? (
                  <div className="form_error">
                    {formik.errors.Date_of_birth}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="password"
                  id="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="form_error">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="input_spacing" ></div>

            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Confirm_password"
                  id="Confirm_password"
                  name="Confirm_password"
                  {...formik.getFieldProps("Confirm_password")}
                />
                {formik.touched.Confirm_password &&
                formik.errors.Confirm_password ? (
                  <div className="form_error">
                    {formik.errors.Confirm_password}
                  </div>
                ) : null}
              </div>
            </div>
         
            <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
              <h5>Profile Image</h5>
                <input
                  className=""
                  type="file"
                  // placeholder="Profile_image"
                  id="Profile_image"
                  name="Profile_image"
                  {...formik.getFieldProps("Profile_image")}
                />
                {formik.touched.Profile_image && formik.errors.Profile_image ? (
                  <div className="form_error">
                    {formik.errors.Profile_image}
                  </div>
                ) : null}
              </div>
            </div>
            {/* <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Pan"
                  id="Pan"
                  name="Pan"
                  {...formik.getFieldProps("Pan")}
                />
                {formik.touched.Pan && formik.errors.Pan ? (
                  <div className="form_error">{formik.errors.Pan}</div>
                ) : null}
              </div>
            </div> */}
            {/* <div className="col-sm-4">
              {" "}
              <div className="form_container_sub">
                <input
                  className=""
                  type="text"
                  placeholder="Nominee"
                  id="Nominee"
                  name="Nominee"
                  {...formik.getFieldProps("Nominee")}
                />
                {formik.touched.Nominee && formik.errors.Nominee ? (
                  <div className="form_error">{formik.errors.Nominee}</div>
                ) : null}
              </div>
            </div> */}
          </div>
          <button
            className="btn btn-primary add_client_next_btn mt-5"
            type="submit"
          >
            Save
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
      store_id: (_id)=>dispatch({type: "User_id_container",data_id: _id})
    };
  };
  ///for reudux


// export default Personal_info_form;

//connecting with reudux store
export default connect(mapStateToProps,mapDispatchToProps)(Personal_info_form)
