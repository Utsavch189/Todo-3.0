import React, { useState } from 'react';
import '../Styles/AddTodo.css';
import Success from './Success';
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import { ethers } from 'ethers';
import { Address } from '../Utils/BlockAddress';
import Abi from '../Utils/Abi.json';

const client = create('https://ipfs.infura.io:5001/api/v0');

export default function AddImg({signer}) {
    
  const[image,setImage]=useState("");
  const[ipfs,setIpfs]=useState("");

  const img=(e)=>{
    const file=e.target.files[0]
    setImage(URL.createObjectURL(file))
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = async() => {
        const buffer = (Buffer(reader.result))
        try {
            const created = await client.add(buffer);
            setIpfs(created.path);

        } catch (err) {
            console.log(err)
        }

    }
  }

  const add=()=>{
    if(ipfs){
      const contract=new ethers.Contract(Address,Abi.abi,signer);
      contract.add("",ipfs);
      }
  }

  return (
    <>
    {ipfs!==""?(<Success success={"Ipfs Set Successfully"}/>):(<></>)}
    <div className="img-mains mx-2 my-2" style={{"width":"100%","height":"220px","backgroundColor":"rgb(241, 238, 234)"}}>
  <div className="container uploadphoto my-3">
    {image===""?(
      <>
    <input type="file" className="pic" onChange={img}/>
    <i className="fa fa-plus" style={{"font-size":"25px"}} /></>):(
      <img className="pics" src={image}/>
    )
}
  </div>
  <div className="container-fluid add" style={{"height":"100px","display":"flex","-webkit-align-items":"flex-end","-webkit-box-align":"flex-end","-ms-flex-align":"flex-end","align-items":"flex-end","-webkit-box-pack":"end","-webkit-justify-content":"flex-end","-ms-flex-pack":"end","justify-content":"flex-end"}}>
  <h6 className='text-center' style={{"color":"black"}}>Add Images</h6>
    <button className="btn btn-primary mx-4" onClick={add}>Add</button>
  </div>
</div>

    </>
  )
}
