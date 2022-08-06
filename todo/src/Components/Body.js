import React,{useState,useEffect} from 'react'
import '../Styles/Body.css';
import ImgBody from './ImgBody';
import TxtBody from './TxtBody';
import { ethers } from 'ethers';
import { Address } from '../Utils/BlockAddress';
import Abi from '../Utils/Abi.json';



export default function Body({signer}) {

  const[text,setText]=useState([])
  const[img,setImg]=useState([])
  const[show,setShow]=useState(true)

  const getTxt=async()=>{
    const contract=new ethers.Contract(Address,Abi.abi,signer);
    let res=await contract.get();
    for(let i=0;i<res.length;i++){
      if(res[i].todo!==""){
        
        setText(s=>[...s,res[i]])
        setShow(false)
      }
      else if(res[i].img!==""){
        setImg(s=>[...s,res[i]])
        setShow(false)
      }
    }
    
    
    
    
  }
useEffect(()=>{getTxt()},[])
 

console.log(text)

  return (
    <>
<div className="container-fluid my-2" style={{"height":"80vh","display":"flex","-webkit-box-pack":"space-around","-webkit-justify-content":"space-around","-ms-flex-pack":"space-around","justify-content":"space-around","-webkit-flex-wrap":"wrap","-ms-flex-wrap":"wrap","flex-wrap":"wrap","position":"absolute","zIndex":"1000","overflowY":"scroll"}}>
{show?(
<div className="container-fluid" style={{"height":"30px","display":"flex","alignItems":"center","justifyContent":"center"}}>
  <button onClick={getTxt} className="btn btn-dark">Show Todo</button>
</div>):(<></>)
}
{text.length!==0? text.map((i)=><TxtBody signer={signer} key={i.id._hex} data={i}/>):(<></>)}
{img.length!==0? img.map((i)=><ImgBody signer={signer} key={i.id._hex} data={i}/>):(<></>)}

</div>

    </>
  )
}
