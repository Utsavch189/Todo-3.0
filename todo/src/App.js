import './App.css';
import Body from './Components/Body';
import AddTodo from './Components/AddTodo';
import React,{useEffect, useState} from 'react';
import { ethers } from 'ethers';
import Error from './Components/Error';

function App() {
  
  const [address,setAddress]=useState("");
  const[error,setError]=useState("");
  const [signer,setSigner]=useState(null);

  

  const wallet=async()=>{
    if(!window.ethereum){
      setError("No Wallet Found");
    }
    const chanid='0x4';
    await window.ethereum.send("eth_requestAccounts");
    let current_chainid=await window.ethereum.request({method:'eth_chainId'});
    if(chanid===current_chainid){
      const ac=await window.ethereum.request({method:"eth_requestAccounts"});
      setAddress(ac[0]);
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      setSigner(provider.getSigner());
    }
    else{
      setError("Not in currect network");
    }
  }

  useEffect(()=>{wallet();},[])


  return (
<>
{error!==""?(<><Error error={error}/></>):(<></>)}
<Body signer={signer}/>

<AddTodo signer={signer}/>

</>
  );
}

export default App;
