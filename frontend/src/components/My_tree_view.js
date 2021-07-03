import React from "react";
import DataCylinder from "./Data_Cylinder";
import Tree_outside from "./Tree_outside";
import Tree_card from "./Tree_card";
import '../Styles/tree_card.css'
//for redux
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function My_tree_view() {
  return (
    <React.Fragment>
      <h5>My Tree View</h5>
      <div className="container">
      
      <div className="cotainer p-5">
                <div className="row">
                    <div className="col-sm-4" ><Tree_card title="Left Team" title_val={255} active="Left Active Team" active_val={255}  sale="Left Sale" sale_val={255} carry="Left Carry forward" carry_val={255}  /></div>
                    <div className="col-sm-4" ><Tree_card title="Right Team" title_val={255} active="Right Active Team" active_val={255}  sale="Right Sale" sale_val={255} carry="Right Carry forward" carry_val={255} /></div>
                    <div className="col-sm-4" ><Tree_card title="Direct Team" title_val={255} active="Direct Active Team" active_val={255}  sale="Direct Sale" sale_val={255} carry="Direct Carry forward" carry_val={255} /></div>
                </div>
                </div>
        {/* <div className="row mt-5">
          <div className="col-sm-12">
            <User_tree_block />
          </div>
          <div className="col-sm-3 offset-3">
            <User_tree_Lblock>
           <h1 style={{width: '500px',height: '500px',backgroundColor: 'blue'}}>boommm !!!</h1>
            </User_tree_Lblock>
          </div>
          <div className="col-sm-3">
            <User_tree_Rblock />
          </div>
        </div> */}
        <Provider store={Store}>
        <Tree_outside/>
        </Provider>
      </div>
    </React.Fragment>
  );
}

export default My_tree_view;
