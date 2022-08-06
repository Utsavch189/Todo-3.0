import React from 'react'

export default function ({cancel}) {
  return (
   <>
   <div className="container-fluid" style={{"height":"130px","display":"flex","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
  <button onClick={()=>cancel(false)} style={{"width":"75px","height":"75px","border-radius":"50%","background-color":"antiquewhite","border":"none"}}><i className="fa fa-times-circle-o" style={{"font-size":"26px"}} /></button>
</div>
   </>
  )
}
