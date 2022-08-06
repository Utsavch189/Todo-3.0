import React from 'react'

export default function Error({error}) {
  return (
    <>
    <div className="alert alert-danger alert-dismissible fade show" style={{"position":"absolute","zIndex":"2000","width":"100%"}}>
  <strong>Error!</strong> {error}
  <button type="button" className="btn-close" data-bs-dismiss="alert" />
</div>
    </>
  )
}
