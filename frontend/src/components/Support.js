import React from 'react'
import All_team_table from './All_team_table'
import '../Styles/support.css'

function Support() {
    return (
        <React.Fragment>
            <h4 className="mt-2 mb-5">Support</h4>
            <div className="container mb-5">
                <div className="row">
                <div className="col-sm-4 offset-8 mb-2"><button className="btn btn-primary order_his_button">Open Ticket</button></div>
                    <div className="col-4 col-sm-2 offset-sm-1">
                        <div className="support_cards bg-info p-3 shadow"><h6>Open</h6><h6>3</h6></div>
                    </div>
                    <div className="col-4 col-sm-2">
                       <div className="support_cards bg-info p-3 shadow"> <h6>In Progress</h6><h6>3</h6></div>
                    </div>
                    <div className="col-4 col-sm-2">
                       <div className="support_cards bg-info p-3 shadow"> <h6>Answered</h6><h6>3</h6></div>
                    </div>
                    <div className="col-4 offset-2 offset-sm-0 col-sm-2 support_spacer">
                        <div className="support_cards bg-info p-3 shadow"><h6>On Hold</h6><h6>3</h6></div>
                    </div>
                    <div className="col-4 col-sm-2 support_spacer">
                       <div className="support_cards bg-info p-3 shadow"> <h6>Closed</h6><h6>3</h6></div>
                    </div>
                </div>
            </div>
            <All_team_table/>
        </React.Fragment>
    )
}

export default Support
