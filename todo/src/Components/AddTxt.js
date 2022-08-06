import React,{useState} from 'react';
import '../Styles/AddTodo.css';
import { ethers } from 'ethers';
import { Address } from '../Utils/BlockAddress';
import Abi from '../Utils/Abi.json';

export default function AddTxt({signer}) {
    
    const [val,setVal]=useState("");
    const add=()=>{
        if(val){
        const contract=new ethers.Contract(Address,Abi.abi,signer);
        contract.add(val,"");
        }
    }

  return (
    <>
   
    <div className="text-mains mx-2 my-2" style={{"width":"100%","height":"220px","backgroundColor":"rgb(241, 238, 234)"}}>
  <div className="container my-2" style={{"width":"100%","height":"150px"}}>
    <textarea style={{"width":"80%","height":"150px"}} defaultValue={""} value={val} onChange={(e)=>setVal(e.target.value)}/>
  </div>
  <div className="container-fluid add" style={{"height":"40px","display":"flex","-webkit-align-items":"flex-end","-webkit-box-align":"flex-end","-ms-flex-align":"flex-end","align-items":"flex-end","-webkit-box-pack":"end","-webkit-justify-content":"flex-end","-ms-flex-pack":"end","justify-content":"flex-end"}}>
    <button className="btn btn-primary" onClick={add}>Add</button>
  </div>
</div>

    </>
  )
}
