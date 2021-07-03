import React,{useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function Credit_card() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <>
      <form className="container personal_info_form_container shadow" style={{backgroundColor: "white"}}>
      <div className="form_container_inner">
          <div className="row py-5">
          
            <div className="order-2 order-sm-1 col-12 col-sm-6 add_money_form"><input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e)=> setFocus(e.target.name)}
        />
        <input 
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e)=> setFocus(e.target.name)}
        />
        
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e)=> setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e)=> setFocus(e.target.name)}
        /></div>
          <div className="order-1 order-sm-2 col-12 col-sm-6"><Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}/></div>
          </div>
          </div>
        
       
        
      </form>
    </>
  );
}

export default Credit_card;
