import React, {useState} from 'react'

function Modal({movie}) {

  const noimage = "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"

    

  return (
    
      
  <>
    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button> */}
    
  
    <div className="modal fade" id={movie.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{movie.titleText.text}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" alt="noimage" style={{height: "220px"}}/>
          <p> Release year: {movie.releaseYear.year}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    </>

  )
}

export default Modal