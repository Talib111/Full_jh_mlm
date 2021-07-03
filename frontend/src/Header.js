import React from 'react';
import {RiCopyrightFill} from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";
import {GiPalmTree} from 'react-icons/gi'
import './Styles/header.css'

//for redux
import { connect } from "react-redux";
import Nav_open_button from './components/Nav_open_button';

function Header(props) {
    return (
        <>
            <div className="header text-center text-white py-1 shadow-sm" style={{width: "100%",backgroundColor: "#34BA9B",position: "relative"}}>
             {/* <span
              style={{
                display: "block",
                float: "left",
                paddingRight: "10px",
                paddingTop: "10px",
              
                zIndex: "10001"
              }}
              onClick={()=>props.buyCake("230px")}
            >
              {" "}
              <GiHamburgerMenu size="25px" color="white" />
            </span> */}
            <div className="f1"> <Nav_open_button/></div>
            <div className="f2"> <h3>Jh Herbo Fit</h3></div>
            <div className="f1"><GiPalmTree size="30px"/></div>
           
{/*            
           <span style={{display: "inline"}}> <h3>Jh Herbo Fit</h3></span>  <span style={{display: "inline",float: 'right',position: 'relative',top: "-30px"}}s><GiPalmTree size="30px"/></span> */}
            </div>
        </>
    )
}

// export default Header
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
export default connect(mapStateToProps,mapDispatchToProps)(Header)
