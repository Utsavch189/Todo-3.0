import React from 'react';
import punk11 from '../Images/punk11.png';
import '../Styles/First.css';

export default function First({bal}) {
  return (
    <>
    <div className="container-fluid" style={{"height":"60vh"}}>
        <div className="container-fluid" style={{"height":"15vh","color":"white"}}>
        <div className="col-lg-6 re">
      <div className="extra">
        <i className="fa-brands fa-ethereum fa-3x mx-2 my-2" style={{"fontSize":"30px"}}/>
        <p className=" mx-2">Balance: <strong>{bal}</strong>eth</p>
        <h4 className=" mx-2">Ethereum</h4>
      </div>
      
    </div>
    
        </div>
     
        <div className="container-fluid" style={{"height":"40vh"}}>
           
            <img src={punk11} alt="" style={{"height":"inherit","width":"100%"}} />
            
        </div>
    </div>
    </>
  )
}
