import React from 'react';
import '../Styles/AddTodo.css';

export default function AddImg({signer}) {
    console.log(signer)
  return (
    <>
    
    <div className="img-mains mx-2 my-2" style={{"width":"100%","height":"220px","backgroundColor":"rgb(241, 238, 234)"}}>
  <div className="container uploadphoto my-3">
    <input type="file" className="pic" />
    <i className="fa fa-plus" style={{"font-size":"25px"}} />
  </div>
  <div className="container-fluid add" style={{"height":"100px","display":"flex","-webkit-align-items":"flex-end","-webkit-box-align":"flex-end","-ms-flex-align":"flex-end","align-items":"flex-end","-webkit-box-pack":"end","-webkit-justify-content":"flex-end","-ms-flex-pack":"end","justify-content":"flex-end"}}>
    <button className="btn btn-primary">Add</button>
  </div>
</div>

    </>
  )
}
