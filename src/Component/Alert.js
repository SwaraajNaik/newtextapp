import React from 'react'

export default function Alert(props) {
  return (
 
 props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong> {props.alert.message}
  {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
  <button type="button" class="close ml-auto" data-bs-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>

  )
}
