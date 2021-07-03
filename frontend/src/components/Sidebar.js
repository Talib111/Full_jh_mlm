import React, { useState,useEffect } from 'react'
import '../Styles/sidebar.css'
import {Link} from 'react-router-dom'
import {AiOutlineDashboard} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {ImTree} from 'react-icons/im'
import {BiCheckCircle} from 'react-icons/bi'
import {RiTeamFill} from 'react-icons/ri'
import {RiBankLine} from 'react-icons/ri'
import {CgDollar} from 'react-icons/cg'
import {GiBookmarklet} from 'react-icons/gi'
import {FaHistory} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineRollback} from 'react-icons/ai'
import {IoWalletSharp} from 'react-icons/io5'
import {GiReceiveMoney} from 'react-icons/gi'
import {VscActivateBreakpoints} from 'react-icons/vsc'
import {BiSupport} from 'react-icons/bi'
import {ImSwitch} from 'react-icons/im'
import {IoMdArrowDropdown} from 'react-icons/io'
//for redux
import { connect } from "react-redux";
import Nav_close_button from "./Nav_close_button";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import {GoPrimitiveDot} from 'react-icons/go'


function Sidebar(props) {

    const [open_team, setopen_team] = useState('0px');
    const [open_reports, setopen_reports] = useState('0px');
    const [open_payout, setopen_payout] = useState('0px');
    // const [window_width, setwindow_width] = useState(200);

    //calculating window width
    // useEffect(() => {
      
    //   //seting window width 
    //  setwindow_width(window.innerWidth);
    //  console.log("window width",window.innerWidth);
    // }, [])


    const check_nav=()=>{
      if(window.innerWidth<=600){
    //  console.log("window width",window.innerWidth);

        props.buyCake('0px');
      }
    }
// //closing sidebar on 600px less
//     if(window_width<=600){
//       props.buyCake('0px')
//     }
    //dropdown working.......................//////////
    const open_team_drop_func = ()=>{
        if(open_team == '0px'){
            setopen_team('140px')
        }
        else{
            setopen_team('0px')
        }
      
    }
    const open_reports_drop_func = ()=>{
        if(open_reports == '0px'){
            setopen_reports('70px')
        }
        else{
            setopen_reports('0px')
        }
      
    }
    const open_payout_drop_func = ()=>{
        if(open_payout == '0px'){
            setopen_payout('320px')
        }
        else{
            setopen_payout('0px')
        }
      
    }

   /////dropdown working
    return (
        <React.Fragment>
           <div className="sidebar_container" style={{zIndex: "1000",width: props.nav_state,overflowX:'hidden',transition:"0.5s"}}>
         <div style={{width: "250px"}}>
           {/* nav close */}
        <Provider store={Store}>
          <Nav_close_button />
        </Provider>
                
           <div className="user_image_box"><img  className="user_image_img" src="data:image/jpeg;base64,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
" alt="demo" /></div>
               <ul className="sidebar_container_list">
                   <li className="sidebar_container_list_item first_list_item"><AiOutlineDashboard/> <Link className="link" to="/dashboard"  onClick={check_nav}>Dashboard</Link> </li>
                   <li className="sidebar_container_list_item"><BsFillPersonPlusFill /> <Link className="link" to="/add-client"  onClick={check_nav}>Add_client</Link></li>
                   <li className="sidebar_container_list_item"><ImTree/><Link className="link" to="/my-tree-view"  onClick={check_nav}>My Tree View</Link></li>
                   <li className="sidebar_container_list_item"><BiCheckCircle/><Link className="link" to="/update-kyc"  onClick={check_nav}>Update KYC</Link></li>

                     {/* team dropdown */}
                   <li className="sidebar_container_list_item" onClick={open_team_drop_func}><li  style={{cursor: 'pointer'}}  ><RiTeamFill/>&nbsp;&nbsp;Team <span><IoMdArrowDropdown/></span></li></li>
                   <li className="sidebar_container_list_item drop_li" style={{height: open_team,transition: '0.3s'}}><div className="drop_down_content" style={{width: '100%',overflow: 'hidden',height:'100%'}}><li><Link className="link" to="/my-team"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;My Team</Link></li><li><Link className="link" to="/left-team"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Left Team</Link></li><li><Link className="link" to="/right-team"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Right Team</Link></li><li><Link className="link" to="/direct-team"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Direct Team</Link></li> </div></li>
                    {/* /team dropdown */}


                   <li className="sidebar_container_list_item"><RiTeamFill/><Link className="link" to="/update-bank-details"  onClick={check_nav}>Update Bank Details</Link></li>
                    {/* Payout dropdown */}
                    <li className="sidebar_container_list_item" onClick={open_payout_drop_func}><li  style={{cursor: 'pointer'}}  ><RiTeamFill/>&nbsp;&nbsp;Payout <span><IoMdArrowDropdown/></span></li></li>
                   <li className="sidebar_container_list_item drop_li" style={{height: open_payout,transition: '0.3s'}}><div className="drop_down_content" style={{width: '100%',overflow: 'hidden',height:'100%'}}><li><Link className="link" to="/closing-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Direct Income</Link></li><li><Link className="link" to="/direct-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Repurchase Income</Link></li><li><Link className="link" to="/matching-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Matching Income</Link></li><li><Link className="link" to="/leadership-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Matching Bonus</Link></li><li><Link className="link" to="/cashback-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Leadership Reward</Link></li><li><Link className="link" to="/roi-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Leadership Income</Link></li><li><Link className="link" to="/roi-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Car Fund</Link></li><li><Link className="link" to="/roi-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;House Fund</Link></li><li><Link className="link" to="/roi-payout"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Anual Bonus</Link></li> </div></li>
                    {/* /Payout dropdown */}

                     {/* Reports dropdown */}
                   <li className="sidebar_container_list_item" onClick={open_reports_drop_func}><GiBookmarklet/><li style={{cursor: 'pointer'}}>&nbsp;&nbsp;Reports <span><IoMdArrowDropdown/></span></li></li>
                    <li className="sidebar_container_list_item drop_li" style={{height: open_reports,transition: '0.3s'}}><div className="drop_down_content" style={{width: '100%',overflow: 'hidden',height:'100%'}}><li><Link className="link" to="/admin-charge"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;Admin Charge</Link></li><li><Link className="link" to="/tds-charge"  onClick={check_nav}><GoPrimitiveDot size="14px"/>&nbsp;&nbsp;TDS Charge</Link></li></div></li>
                    {/* /Reports dropdown */}

                   <li className="sidebar_container_list_item"><FaHistory/><Link className="link" to="/order-history" onClick={check_nav}>Order History</Link></li>
                   <li className="sidebar_container_list_item"><CgProfile/><Link className="link" to="/profile"  onClick={check_nav}>Profile</Link></li>
                   <li className="sidebar_container_list_item"><AiOutlineRollback/><Link className="link" to="/withdraw-request"  onClick={check_nav}>Withdraw request</Link></li>
                   <li className="sidebar_container_list_item"><IoWalletSharp/><Link className="link" to="/wallet"  onClick={check_nav}>Wallet</Link></li>
                   <li className="sidebar_container_list_item"><GiReceiveMoney/><Link className="link" to="/add-money"  onClick={check_nav}>Add Money</Link></li>
                   <li className="sidebar_container_list_item"><GiReceiveMoney/><Link className="link" to="/product"  onClick={check_nav}>Product</Link></li>
                   <li className="sidebar_container_list_item"><VscActivateBreakpoints/><Link className="link" to="/activate-client"  onClick={check_nav}>Activate Client</Link></li>
                   <li className="sidebar_container_list_item"><BiSupport/><Link className="link" to="/support"  onClick={check_nav}>Support</Link></li>
                   <li className="sidebar_container_list_item"><ImSwitch/><Link className="link" to="/logout"  onClick={check_nav}>LouOut</Link></li>
               </ul>
         </div>
           </div>
        </React.Fragment>
    )
}

// export default Sidebar
 //for redux
  //getting the num of cakes here
  const mapStateToProps = (state) => {
    return {
      numofCakes: state.numofCakes,
      current_User_Id: state.current_User_Id,
      nav_state: state.nav_state,
      window_width: state.window_width
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "nav_Toggle",nav_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Dashboard
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
