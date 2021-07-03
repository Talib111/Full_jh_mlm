import React, {useState,useEffect} from "react";
import User_card from "./User_card";
import Personal_info_form from "./Personal_info_form";
import Profile_form from "./Profile_form";
import Change_password_form from "./Change_password_form";
import Change_avatar_form from "./Change_avatar_form";
import "../Styles/profile.css";
//for redux
import { connect } from "react-redux";
import Profile_conditional from "./Profile_conditional";

//for redux
import { Provider} from 'react-redux';
import Store from './Redux/Store';
import axios from 'axios'

function Profile(props) {

  const [all_fetched_data, setall_fetched_data] = useState({})
  const [loading, setloading] = useState(false);

    useEffect(() => {
      //current user id is making problem
       console.log("useEffect is executed"," ",props.current_User_Id);
      // axios.post('http://localhost:3000/get-all-data',{_id: "fajal"}).then(res=>{
      //   console.log(res)
      //   setall_fetched_data(res.data)
      // }).catch(err =>{
      //   console.log(err);
      // })
      // get_User_Data();

    }, []);//empty array means data is fetched only once
    
    // var all_data_fetched;

    const get_User_Data = ()=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status==200){
           //we have to convert string into json
            setall_fetched_data(JSON.parse(this.responseText))
            console.log("success",all_fetched_data);
            setloading(false);

          //  console.log("success",all_fetched_data);
          //  console.log(all_fetched_data);//not updating in console until used in somewhere
          }
        }
        xhttp.open("POST","http://localhost:3000/get-all-data",true);
        xhttp.setRequestHeader('Content-Type',"application/json");
        xhttp.send(JSON.stringify({_id: props.current_User_Id}));
    }

    if(loading){
      return <p>data is loading.....</p>;
    }
  
  else{
    return (
      <React.Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mb-5">
              {/* <User_card email={all_fetched_data.personal_info.Email} phone={all_fetched_data.personal_info.Phone}  address={all_fetched_data.address_Data.address} /> */}
              <User_card email="abc@gmail.com" phone="9835328166"  address="ranchi, India" />
               {/* <User_card email={all_fetched_data._id} /> */}
            </div>
            <div className="col-sm-8">
              <div className="row profile_tabs">
                {/* <div className="col-4 text-center" onClick={props.buyCake}>Profile</div>
                <div className="col-4 text-center" onClick={props.buyCake}>Password</div>
                <div className="col-4 text-center" onClick={props.buyCake(55)}>Avatar</div> */}
              <div className="col-4 text-center border" onClick={() => props.buyCake(1)}>Profile</div>
                <div className="col-4 text-center border" onClick={() => props.buyCake(2)}>Password</div>
                <div className="col-4 text-center border" onClick={() => props.buyCake(3)}>Avatar</div>
              </div>{" "}
            
             <Provider store={Store}>
                 
             <Profile_conditional/>
                     </Provider>
              
            </div>
            {/* <div className="col-sm-8">
              <Change_password_form />
            </div> */}
            {/* <div className="col-sm-8">
              <Change_avatar_form />
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

//for redux
//getting the num of cakes here
const mapStateToProps = (state) => {
  return {
    prof_num: state.prof_num,
    current_User_Id: state.current_User_Id

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    buyCake: (dt) => dispatch({ type: "CHANGE_TAB",data_dt: dt }),
  };
};
///for reudux
// export default Profile
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
