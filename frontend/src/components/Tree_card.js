import React from "react";

function Tree_card(props) {
  return (
    <>
      <div className="tree_card p-3" style={{ backgroundColor: props.color }}>
        <h6 >
          {props.title} : <span>&nbsp;{props.title_val}</span>
        </h6>
        <h6>
          {props.active} : <span>&nbsp;{props.active_val}</span>
        </h6>
        <h6>
          {props.sale} : <span>&nbsp;{props.sale_val}</span>
        </h6>
        <h6>
          {props.carry} : <span>&nbsp;{props.carry_val}</span>
        </h6>
      </div>
    </>
  );
}

export default Tree_card;
