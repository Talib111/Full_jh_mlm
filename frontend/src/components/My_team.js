import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import All_team_table from './All_team_table'

function My_team() {
    return (
        <React.Fragment>
        <h5>My Team</h5>
           <div className="conatiner">
            <div className="row">
              <div className="col-sm-4 offset-8 mb-2"><button className="btn btn-primary order_his_button">Add Client <AiOutlineUserAdd/></button></div>
            </div>
          </div>
          <All_team_table/>
        </React.Fragment>
    )
}

export default My_team
