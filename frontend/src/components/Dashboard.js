import React,{useEffect,useState} from 'react'
import {BeatLoader} from 'react-spinners';
import Bar_chart from './Bar_chart';
import Doughnut_chart from './Doughnut_chart';
import Line_chart from './Line_chart';
import DataCard from './dashboard/DataCard';
import QuickLinks from './dashboard/QuickLinks';
import '../Styles/dashboard/datacard.css'
import '../Styles/dashboard/quicklinks.css'
import '../Styles/dashboard.css'
import {MdContentCopy} from 'react-icons/md'
//for redux
import { connect } from "react-redux";


function Dashboard(props) {


    const [all_fetched_data, setall_fetched_data] = useState();
    const [left_Team, setleft_Team] = useState();
    
  const [loading, setloading] = useState(true);


    useEffect(() => {
    //    console.log("useEffect is executed");
       get_User_Data();
    // console.log(props.logged_User);
        
    }, []);
    
    // var all_data_fetched;

    const get_User_Data = ()=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status==200){
           //we have to convert string into json
            setall_fetched_data(JSON.parse(this.responseText));
        //    console.log(all_fetched_data);
           setloading(false);

          }
        }
        xhttp.open("POST","http://localhost:3000/get-all-data",true);
        xhttp.setRequestHeader('Content-Type',"application/json");
        xhttp.send(JSON.stringify({_id: props.logged_User}));
    }

    if(loading){
        return <p>data is loading.....</p>;
      }

    else{
        return (
            <React.Fragment>
                {/* <span className="username_pills">Welcome {all_fetched_data._id}</span> */}
                <span className="username_pills">Welcome {all_fetched_data._id}</span>
               
                <div className="cotainer pt-5">
                    <div className="row">
                    <div className="col-sm-12"><h5>Total Sales</h5></div>
                        <div className="col-4" ><DataCard title="Left Team" value={all_fetched_data.Team.left_Team.length}  /></div>
                        <div className="col-4" ><DataCard title="Right Team" value={all_fetched_data.Team.right_Team.length} /></div>
                        <div className="col-4" ><DataCard title="Direct" value={all_fetched_data.Team.direct_Team.length} /></div>
                    </div>
                    <div className="row mb-5">
                     
                        <div className="col-sm-6 mt-5"> <Bar_chart/></div>
                        <div className="col-sm-6"><Doughnut_chart/></div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-sm-12"><h5>Total Members</h5></div>
                        <div className="col-4" ><DataCard title="Left" value={all_fetched_data.Team.left_Team.length} /></div>
                        <div className="col-4" ><DataCard title="Right" value={all_fetched_data.Team.right_Team.length} /></div>
                        <div className="col-4" ><DataCard title="Direct" value={all_fetched_data.Team.direct_Team.length} /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4" ><DataCard title="Active" value={255} color="#009A0A" /></div>
                        <div className="col-4" ><DataCard title="Non-Active" value={255} color="grey" /></div>
                        <div className="col-4"><DataCard title="Bus. Vol." value={255} color="#8FAA07" /></div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-sm-12"><h5>Business Type</h5></div>
                        <div className="col-4" ><DataCard title="Gold Business" value={255} color="#009A0A" /></div>
                        <div className="col-4" ><DataCard title="Package Business" value={255} color="grey" /></div>
                        <div className="col-12 col-sm-4" ><div className="card"><img src="jj.png" alt="image" /><h5>Direct sponser</h5><h6>Email</h6>
                        <h6>Phone</h6>
                        <h6>Joining Date</h6><h6>Activatd at</h6><h6>Social Profile</h6></div><DataCard title="Next Royality date" value={255} color="blue" /></div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-sm-12"><h5>Wallet</h5></div>
                        <div className="col-4" ><DataCard title="Tour Topup Wallet" value={255} color="#009A0A" /></div>
                        <div className="col-4" ><DataCard title="Gold Topup Wallet" value={255} color="grey" /></div>
                        <div className="col-4" ><DataCard title="Payout Topup Wallet" value={255} color="grey" /></div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-sm-12"><h5>.....</h5></div>
                        <div className="col-4" ><DataCard title="Sales Amount" value={255} color="#009A0A" /></div>
                        <div className="col-4" ><DataCard title="Total paid" value={255} color="grey" /></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 mb-2"><h4>Quick Links</h4></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                        <div className="col-3 col-sm-2" ><QuickLinks links="www" link_text="profile"/></div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-sm-12 mb-2"><h4>Referral Link</h4></div>
                    <div className="col-sm-12 mb-2"><h6 className="ref_link_url" style={{color: 'green'}}>https://binary.lbmsolutions.in/admin/auth/cregister?sponser_id=TPID <span style={{cursor: 'pointer'}}><MdContentCopy color="black"/></span></h6></div>
                    </div>
                </div>
                <BeatLoader size={24} color='green' loading={false}/>
               
              
               
               
              
            </React.Fragment>
        )
    }
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
      buyCake: (form_dt) => dispatch({ type: "SELL_CAKE",form_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Dashboard
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

