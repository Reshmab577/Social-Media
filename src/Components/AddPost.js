import React from 'react'

const AddPost = () => {
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">Title
                    <input type="text"className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">Message
                <textarea name="" id="" cols="2" rows="2" class="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AddPost