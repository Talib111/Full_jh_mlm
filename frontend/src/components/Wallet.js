import React from 'react'
import DataCard from './dashboard/DataCard'
import All_team_table from './All_team_table'
import '../Styles/wallet.css'
import {Link} from 'react-router-dom'

function Wallet() {
    return (
        <React.Fragment>
            <h4>Wallet</h4>
          <div className="cotainer">
              <div className="row mb-3 px-3">
                  <div className="col-sm-4">
                      <div className="row wallet_tabs">
                          <div className="col-3 col-sm-3">
                          <Link  to="/my-team">  <h6>Instant</h6></Link>
                          </div>
                          <div className="col-3 col-sm-3">
                          <Link  to="/my-team">  <h6>Tour</h6></Link>
                          </div>
                          <div className="col-3 col-sm-3">
                          <Link  to="/my-team">  <h6>gold</h6></Link>
                          </div>
                          <div className="col-3 col-sm-3">
                          <Link  to="/my-team">  <h6>Payout</h6></Link>
                          </div>
                      </div>
                  </div>
              </div>
                <div className="row px-2 mb-4">
                    <div className="col-4 col-sm-4 custom_style" ><DataCard title="Total Debit" value={255} /></div>
                    <div className="col-4 col-sm-4 custom_style" ><DataCard title="Total Credit" value={255} /></div>
                    <div className="col-4 col-sm-4 custom_style" ><DataCard title="Balance" value={255} /></div>
                </div>
                </div>
                <All_team_table/>
               
        </React.Fragment>
    )
}

export default Wallet
