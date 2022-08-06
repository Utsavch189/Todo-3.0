import React from 'react'
import '../Styles/Body.css';
import { ethers } from 'ethers';
import { Address } from '../Utils/BlockAddress';
import Abi from '../Utils/Abi.json';

export default function ImgBody({data,signer}) {

  const del =()=>{
  
    const contract=new ethers.Contract(Address,Abi.abi,signer);
    contract.del(parseInt(data.id._hex));
}
  return (
    <>
      <div className="img-main mx-2 my-2">
    <div className="container-fluid text">
      <h6>11/02/2001</h6>
    </div>
    <div className="container-fluid img">
      <img src={`https://ipfs.infura.io/ipfs/${data.img}`} alt style={{"height":"150px","width":"100%"}} />
    </div>
    <div className="container-fluid del my-1">
      <button onClick={del}><i className="fa fa-trash-o" /></button>
    </div>
  </div>
    </>
  )
}
