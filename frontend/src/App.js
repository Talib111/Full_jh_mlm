import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Add_client from "./components/Add_client";
// import My_tree_view from "./components/My_tree_view";
// import Update_kyc from "./components/Update_kyc";
// import Team from "./components/Team";
// import Update_bank_details from "./components/Update_bank_details";
// import Payout from "./components/Payout_closing";
// import Reports from "./components/Reports_admin_charge";
// import Order_history from "./components/Order_history";
// import Profile from "./components/Profile";
// import Withdraw_request from "./components/Widraw_request";
// import Wallet from "./components/Wallet";
// import Add_money from "./components/Add_money";
// import Activate_client from "./components/Activate_client";
// import Support from "./components/Support";
// import Logout from "./components/Logout";
import Login_page from "./components/Login_page";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
// import My_team from "./components/My_team";
// import Left_team from "./components/Left_team";
// import Right_team from "./components/Right_team";
// import Direct_team from "./components/Direct_team";
// import Reports_tds_charge from "./components/Reports_tds_charge";
// import Reports_admin_charge from "./components/Reports_admin_charge";
// import Payout_closing from "./components/Payout_closing";
// import Payout_direct from "./components/Payout_direct";
// import Payout_matching from "./components/Payout_matching";
// import Payout_leadership from "./components/Payout_leadership";
// import Payout_cashback from "./components/Payout_cashback";
// import Payout_roi from "./components/Payout_roi";
//for redux
import { Provider } from "react-redux";
import Store from "./components/Redux/Store";
// import Nav_open_button from "./components/Nav_open_button";
// import Footer from "./components/Footer";
// import Header from "./Header";
// import Product from "./components/Product";

const LazyDashboard = React.lazy(()=> import('./components/Dashboard'));
const Add_client = React.lazy(()=> import('./components/Add_client'));
const My_tree_view = React.lazy(()=> import('./components/My_tree_view'));
const Update_kyc = React.lazy(()=> import('./components/Update_kyc'));
const Update_bank_details = React.lazy(()=> import('./components/Update_bank_details'));
const Order_history = React.lazy(()=> import('./components/Order_history'));
const Profile = React.lazy(()=> import('./components/Profile'));
const Withdraw_request = React.lazy(()=> import('./components/Widraw_request'));
const Wallet = React.lazy(()=> import('./components/Wallet'));
const Add_money = React.lazy(()=> import('./components/Add_money'));
const Activate_client = React.lazy(()=> import('./components/Activate_client'));
const Support = React.lazy(()=> import('./components/Support'));
const Logout = React.lazy(()=> import('./components/Logout'));
const My_team = React.lazy(()=> import('./components/My_team'));
const Left_team = React.lazy(()=> import('./components/Left_team'));
const Right_team = React.lazy(()=> import('./components/Right_team'));
const Direct_team = React.lazy(()=> import('./components/Direct_team'));
const Reports_tds_charge = React.lazy(()=> import('./components/Reports_tds_charge'));
const Reports_admin_charge = React.lazy(()=> import('./components/Reports_admin_charge'));
const Payout_closing = React.lazy(()=> import('./components/Payout_closing'));

const Payout_direct = React.lazy(()=> import('./components/Payout_direct'));
const Payout_matching = React.lazy(()=> import('./components/Payout_matching'));
const Payout_leadership = React.lazy(()=> import('./components/Payout_leadership'));
const Payout_cashback = React.lazy(()=> import('./components/Payout_cashback'));
const Payout_roi = React.lazy(()=> import('./components/Payout_roi'));
const Footer = React.lazy(()=> import('./components/Footer'));
const Header = React.lazy(()=> import('./Header'));
const Product = React.lazy(()=> import('./components/Product'));



function App() {

  // get window width for auto sidebar close
  
  return (
    <BrowserRouter>
      <React.Suspense fallback="loading">
      <div className="App">
        {/* nav open */}
        {/* <Provider store={Store}>
          <Nav_open_button />
        </Provider> */}
        
        {/* <div className="sidebar_block" style={{ width: bl_width }}> */}
        <div className="sidebar_block" >
         
          <Provider store={Store}>
          <Sidebar />
        </Provider>
        </div>

        <div className="content_block">
      
        <Provider store={Store}>
          <Header/>
        </Provider>
        
        <div className="content_block_inside">
          
          <Switch>
           
            <Route exact path="/">
              <Provider store={Store}>
                <Login_page />
              </Provider>
            </Route>
            <Route exact path="/dashboard">
              <Provider store={Store}>
                <LazyDashboard />
              </Provider>
            </Route>
            <Route path="/add-client">
              <Provider store={Store}>
                <Add_client />
              </Provider>
            </Route>
            <Route path="/my-tree-view">
              <My_tree_view />
            </Route>
            <Route path="/update-kyc">
              <Update_kyc />
            </Route>
            {/* team */}
            <Route path="/my-team">
              <My_team />
            </Route>
            <Route path="/left-team">
              <Left_team />
            </Route>
            <Route path="/right-team">
              <Right_team />
            </Route>
            <Route path="/direct-team">
              <Direct_team />
            </Route>
            {/* /team */}
            <Route path="/update-bank-details">
              <Update_bank_details />
            </Route>
            {/* payout */}
            <Route path="/closing-payout">
              <Payout_closing />
            </Route>
            <Route path="/direct-payout">
              <Payout_direct />
            </Route>
            <Route path="/matching-payout">
              <Payout_matching />
            </Route>
            <Route path="/leadership-payout">
              <Payout_leadership />
            </Route>
            <Route path="/cashback-payout">
              <Payout_cashback />
            </Route>
            <Route path="/roi-payout">
              <Payout_roi />
            </Route>
            {/* /payout */}
            {/* Reports */}
            <Route path="/admin-charge">
              <Reports_admin_charge />
            </Route>
            <Route path="/tds-charge">
              <Reports_tds_charge />
            </Route>
            {/* /reports */}
            <Route path="/order-history">
              <Order_history />
            </Route>
            <Route path="/profile">
              <Provider store={Store}>
                <Profile />
              </Provider>
            </Route>

            <Route path="/withdraw-request">
              <Withdraw_request />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/add-money">
              <Add_money />
            </Route>
            <Route path="/product">
            <Provider store={Store}>
              <Product />
              </Provider>
            </Route>
            <Route path="/activate-client">
              <Activate_client />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/logout">
              {/* <Login_page /> */}
            </Route>
            
          </Switch>
         
          </div>
         
         <div style={{position: "sticky",top: "80vh",backgroundColor: 'red'}}> <Footer/></div>
        </div>
       
      </div>
      </React.Suspense>
    </BrowserRouter>

  );
}

export default App;
