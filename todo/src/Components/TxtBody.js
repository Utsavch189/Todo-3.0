import React,{useState,useEffect} from 'react'
import '../Styles/Body.css';
import { ethers } from 'ethers';
import { Address } from '../Utils/BlockAddress';
import Abi from '../Utils/Abi.json';

export default function TxtBody({data,signer}) {

  const del =()=>{
  
        const contract=new ethers.Contract(Address,Abi.abi,signer);
        contract.del(parseInt(data.id._hex));
  }


  return (
    <>
      <div className="text-main mx-2 my-2" style={{"boxShadow":"5px 5px 5px gray"}}>
    <div className="container-fluid text">
      <h6>{data.date._hex}</h6>
    </div>
    <div className="container-fluid text-p">
      <p>{data.todo}</p>
    </div>
    <div className="container-fluid del my-1">
      <button onClick={del}><i className="fa fa-trash-o" /></button>
    </div>
  </div>
    </>
  )
}
