import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const AddPost = () => {
    var[title,setTitle]=useState("")
    var[message,setMessage]=useState("")
    const Post=()=>{
     const data={"title":title,"messsage":message}
     console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">Title
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">Message
                <textarea onChange={(e)=>setMessage(e.target.value)} name="" id="" cols="2" rows="2" className="form-control"></textarea>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={Post}  className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AddPost