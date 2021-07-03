import React from 'react'
import DataCard from './dashboard/DataCard'
import Activate_client_form from './Activate_client_form'
import '../Styles/activate_client.css'

function Activate_client() {
    return (
        <React.Fragment>
            <h5>Activate Client</h5>
           <div className="cotainer">
                <div className="row">
                    <div className="col-sm-4" ><DataCard title="Tour Wallet Amount" value={255} /></div>
                    <div className="col-sm-4 add_money_card_2" ><DataCard title="Gold Wallet Amount" value={255} /></div>
                    <div className="col-sm-4 add_money_card_2" ><DataCard title="Payout Wallet Amount" value={255} /></div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-6"><Activate_client_form title="Activate client by Tour"/></div>
                    <div className="col-sm-6 add_money_form_2"><Activate_client_form title="Activate client by Gold"/></div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default Activate_client

