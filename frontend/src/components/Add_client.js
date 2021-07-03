import React, {useState,useEffect} from "react";
import Personal_info_form from "./Personal_info_form";
import Address_form from "./Address_form";
import Bank_account_details_form from "./Bank_account_details_form";
import Upload_kyc_form from "./Upload_kyc_form";
import "../Styles/add_client.css";
import { AiFillCheckCircle } from "react-icons/ai";


//for redux
import { Provider} from 'react-redux';
import Store from './Redux/Store';
import { connect } from "react-redux";


function Add_client(props) {

  const [formIndicator, setformIndicator] = useState("white");
  const [formborder, setformborder] = useState("black");

  useEffect(() => {
      
    console.log("form saved")
    if(props.numofCakes==11){
      setformIndicator("rgb(24, 214, 24)");
      setformborder("white");
    }
     },[props.numofCakes]);

  
  if (props.numofCakes == 10) {
   
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-1">
              <div className="row pt-0 pb-0">
                <div className="col-3 col-sm-12 num_indicator ">
                  <div>1</div>
                  <h6 className="text-center">Personal Info</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>2</div>
                  <h6 className="text-center">Address</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>3</div>
                  <h6 className="text-center">Bank Account Details</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>4</div>
                  <h6 className="text-center">Update KYC</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-11">
              <Provider store={Store}>
               
                <Personal_info_form />
              </Provider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  //address form 2
  if (props.numofCakes == 11) {
   
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-1">
              <div className="row pt-0 pb-0">
                <div className="col-3 col-sm-12 num_indicator " >
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>1</div>
                  <h6 className="text-center">Personal Info</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>2</div>
                  <h6 className="text-center">Address</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>3</div>
                  <h6 className="text-center">Bank Account Details</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>4</div>
                  <h6 className="text-center">Update KYC</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-11">
             
              <Provider store={Store}>
               
              <Address_form />
              </Provider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  //bank details form 3
  if (props.numofCakes == 12) {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-1">
              <div className="row pt-0 pb-0">
                <div className="col-3 col-sm-12 num_indicator ">
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>1</div>
                  <h6 className="text-center">Personal Info</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator" >
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>2</div>
                  <h6 className="text-center">Address</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>3</div>
                  <h6 className="text-center">Bank Account Details</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>4</div>
                  <h6 className="text-center">Update KYC</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-11">
             
              <Provider store={Store}>
               
              <Bank_account_details_form />
              </Provider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  //kyc form 4
  if (props.numofCakes == 13) {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-1">
              <div className="row pt-0 pb-0">
                <div className="col-3 col-sm-12 num_indicator ">
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>1</div>
                  <h6 className="text-center">Personal Info</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>2</div>
                  <h6 className="text-center">Address</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div style={{backgroundColor: formIndicator,borderColor: formborder,color: formborder}}>3</div>
                  <h6 className="text-center">Bank Account Details</h6>
                </div>
                <div className="col-3 col-sm-12 num_indicator">
                  <div>4</div>
                  <h6 className="text-center">Update KYC</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-11">
            <Provider store={Store}>
               
            <Upload_kyc_form />
               </Provider>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  //after submission successfully
  if (props.numofCakes == 14) {
    return (
      <React.Fragment>
        <div className="container shadow p-5">
        <h2 className="text-center">Congrats! User has been added Successfully</h2>
         <div style={{textAlign: 'center'}}> <AiFillCheckCircle size="40px" color="rgb(24, 214, 24)"/>
         <button className="btn btn-success d-block m-auto mt-3" onClick={() =>props.buyCake(10)}>Done</button></div>
        </div>
      
      
      </React.Fragment>
    );
  }
}



//for redux
  //getting the num of cakes here
  const mapStateToProps = (state) => {
    return {
      numofCakes: state.numofCakes,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "SELL_CAKE",form_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Add_client;
export default connect(mapStateToProps,mapDispatchToProps)(Add_client)

