import React from 'react'
import All_team_table from './All_team_table'
import {AiOutlineDownload} from 'react-icons/ai'



function Reports_admin_charge() {
    return (
        <React.Fragment>
           <h4 className="mt-3 mb-5">Admin Charge</h4>
           <div className="conatiner">
            <div className="row">
              <div className="col-sm-4 offset-8 mb-2"><button className="btn btn-primary order_his_button">Action <AiOutlineDownload/></button></div>
            </div>
          </div>
          <All_team_table/>
        </React.Fragment>
    )
}

export default Reports_admin_charge
