import React from 'react'

export default function ({cancel}) {
  return (
   <>
   <div className="container-fluid my-4" style={{"height":"130px","display":"flex","flexDirection":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
  <button onClick={()=>cancel(false)} style={{"width":"75px","height":"75px","border-radius":"50%","background-color":"antiquewhite","border":"none","display":"flex","alignItems":"center","justifyContent":"center"}}><i className="fa fa-times-circle" style={{"font-size":"36px"}} /></button>
  <h4 className='text-center my-3'>Save Your Texts or Images into Blockchain</h4>
</div>
   </>
  )
}
