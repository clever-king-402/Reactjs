import React from 'react'

export default function Addtodos() {
  return (
    <>
      <form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Add Todo</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Add ToDo"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3" onClick={()=>{}}>Confirm identity</button>
  </div>
</form>
    </>
  )
}
