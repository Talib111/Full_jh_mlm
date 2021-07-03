import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
//for redux
import { connect } from "react-redux";

function Nav_open_button(props) {
    // const [display, setdisplay] = useState("none");
    if(props.nav_state=="0px"){
        return (
            <>
            <span
              style={{
                display: "block",
                float: "left",
                // paddingRight: "10px",
                // paddingTop: "10px",
                paddingLeft: "10px",
                position: "absolute",
                // top: "10px",
                // left: "280px",
                bottom: "10px",
                zIndex: "1"
              }}
              onClick={()=>props.buyCake("230px")}
            >
              {" "}
              <GiHamburgerMenu size="25px" color="white" />
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
export default connect(mapStateToProps,mapDispatchToProps)(Nav_open_button)

