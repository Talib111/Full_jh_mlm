import React,{useState} from 'react'
import { CgClose } from "react-icons/cg";
//for redux
import { connect } from "react-redux";

function Nav_close_button(props) {
    // const [display, setdisplay] = useState("block");
    if(props.nav_state=="230px"){
        return (
            <>
            <span
              style={{
                display: "block",
                float: "right",
                // paddingRight: "30px",
                // paddingTop: "10px",
                position: "absolute",
                // top: "10px",
                left: "10px",
                zIndex: "10001"
              }}
              onClick={()=>props.buyCake("0px")}
            >
              {" "}
              <CgClose size="25px" color="white" />
            </span>
                
            </>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
   
   
}

//for redux
  //getting the num of cakes here
  const mapStateToProps = (state) => {
    return {
      numofCakes: state.numofCakes,
      current_User_Id: state.current_User_Id,
      nav_state: state.nav_state
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (nav_dt) => dispatch({ type: "nav_Toggle",nav_dt2: nav_dt }),
    };
  };
// export default Nav_close_button
export default connect(mapStateToProps,mapDispatchToProps)(Nav_close_button)

