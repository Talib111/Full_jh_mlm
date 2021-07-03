import React from 'react'
import DataCard from './dashboard/DataCard'
import Credit_card from './Credit_card'
import '../Styles/form.css'



function Add_money() {
    return (
        <React.Fragment>
        <h4>Add Money</h4>
          <div className="cotainer p-5">
                <div className="row">
                    <div className="col-sm-4" ><DataCard title="Payout Wallet Amount" value={255} /></div>
                 
                </div>
                </div>
                <Credit_card/>
        </React.Fragment>
    )
}

export default Add_money
