import React,{ useState} from 'react'
import Bank_account_details_form2 from './Bank_account_details_form2'
import Cards from 'react-credit-cards';
//for redux
import { Provider} from 'react-redux';
import Store from './Redux/Store';


function Update_bank_details() {
  const [focus, setFocus] = useState("");

    return (
        <React.Fragment>
          <h4>Bank Account Details</h4>
          <div className="conainer p-5">
            <div className="row">
              <div className="col-sm-3"><h4>Holder Name</h4><p>Mr Mark Sandy</p></div>
              <div className="col-sm-3"><h4>Account No.</h4><p>452896572236</p></div>
              <div className="col-sm-3"><h4>IFSC Code</h4><p>SBIN004585</p></div>
              <div className="col-12 col-sm-6 p-0"> <Cards
          number={4589623366984563}
          name="Mr Mark Sandy"
          expiry="2312"
          cvc={452}
         
          /></div>
            </div>
          </div>
         
          <Provider store={Store}>
               
          <Bank_account_details_form2/>
              </Provider>
        </React.Fragment>
    )
}

export default Update_bank_details
