import React from 'react'

export default function Success({success}) {
  return (
    <>
    <div className="alert alert-success alert-dismissible fade show">
  <strong>Success!</strong> {success}
  <button type="button" className="btn-close" data-bs-dismiss="alert" />
</div>
    </>
  )
}
