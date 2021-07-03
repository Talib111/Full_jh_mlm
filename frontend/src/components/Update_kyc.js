import React from 'react'
import Upload_kyc_form2 from './Upload_kyc_form2'
//for redux
import { Provider} from 'react-redux';
import Store from './Redux/Store';

function Update_Kyc() {
    return (
        <React.Fragment>
          
           <Provider store={Store}>
               
           <Upload_kyc_form2/>
              </Provider>
        </React.Fragment>
    )
}

export default Update_Kyc
