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
      <div className="img-main mx-2 my-2" style={{"boxShadow":"5px 5px 5px gray"}}>
    <div className="container-fluid text">
      <h6>{data.date._hex}</h6>
    </div>
    <div className="container-fluid img">
      <img src={`https://ipfs.infura.io/ipfs/${data.img}`} alt style={{"height":"300px","width":"100%"}} />
    </div><br /><br /><br /><br /><br /><br /><br />
    <div className="container-fluid del my-2">
      <button onClick={del}><i className="fa fa-trash-o" /></button>
    </div>
  </div>
    </>
  )
}
