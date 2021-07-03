import React from "react";

function User_card(props) {
  return (
    <>
      <div className="card p-5" style={{ width: "100%" }}>
        <img
          style={{ width: "100px", borderRadius: "50%" }}
          src="https://picsum.photos/id/237/200/300
"
          alt="demo"
          alt="image"
        />
        <h5>Mark Sandy</h5>
        <h6>Email : {props.email}</h6>
        <h6>Phone : {props.phone}</h6>
        <h6>Address : {props.address}</h6>
        <h6>Email : abc@gmail.com</h6>
      </div>
    </>
  );
}

export default User_card;
