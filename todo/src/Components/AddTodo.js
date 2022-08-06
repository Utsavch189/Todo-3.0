import React,{useEffect, useState} from 'react'
import AddImg from './AddImg'
import AddTxt from './AddTxt'
import '../Styles/AddTodo.css';
import Cancel from './Cancel';





export default function AddTodo({signer}) {

    const [is,setIs]=useState(false);

   
  

  return (
    <>
   
    {!is ?(
    <div style={{"width":"100%","height":"100vh","display":"flex","justifyContent":"flex-end","flexDirection":"column","alignItems":"flex-end"}}>

    <div className="container-fluid" style={{"height":"132px","position":"static","background-color":"rgb(241, 238, 234)","display":"flex","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center","position":"absolute","zIndex":"1000"}}>
        <button onClick={()=>setIs(true)} style={{"width":"75px","height":"75px","border-radius":"50%","background-color":"antiquewhite","border":"none"}}><i className="fa fa-plus" style={{"font-size":"26px"}} /></button>
    </div>

    </div>
    ):(
    <>
    
    <div className="container-fluid my-2" style={{"height":"100vh","background-color": "rgba(255, 255, 255, 0.4)","backdropFilter":"blur(10px)","zIndex":"1000","width":"90vw","position":"absolute","top":"50%","left":"47%","transform":"translate(-50%,-50%)"}}>
        <AddImg signer={signer}/>
        <AddTxt signer={signer}/>
        <Cancel cancel={setIs}/>
        </div>
</>
    )
}
    
    </>
  )
}
