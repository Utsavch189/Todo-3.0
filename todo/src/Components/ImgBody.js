import React from 'react'
import '../Styles/Body.css';
export default function ImgBody() {
  return (
    <>
      <div className="img-main mx-2 my-2">
    <div className="container-fluid text">
      <h6>11/02/2001</h6>
    </div>
    <div className="container-fluid img">
      <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0" alt style={{"height":"150px","width":"100%"}} />
    </div>
    <div className="container-fluid del my-1">
      <button><i className="fa fa-trash-o" /></button>
    </div>
  </div>
    </>
  )
}
