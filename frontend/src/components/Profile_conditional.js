import React from 'react'
import Profile_form from './Profile_form'
import Change_password_form from "./Change_password_form";
import Change_avatar_form from "./Change_avatar_form";

//for redux
import { connect } from "react-redux";
function Profile_conditional(props) {

    if(props.prof_num == 1){
        return(
            <>
            <Profile_form/>
            </>
        )
    }
    if(props.prof_num == 2){
        return(
            <>
            <Change_password_form/>
            </>
        )
    }if(props.prof_num == 3){
        return(
            <>
            <Change_avatar_form />
            </>
        )
    }
   
}

//for redux
//getting the num of cakes here
const mapStateToProps = (state) => {
    return {
      prof_num: state.prof_num,
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
  export default connect(mapStateToProps, mapDispatchToProps)(Profile_conditional);

// export default Profile_conditional
