import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {

    const noimage = "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"

    return (

        <div className="card mb-3" style={{height: '310px'}}>
            <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" alt="noimage" style={{height: "220px"}}/>
            
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{movie.titleText.text}</h5>
                {/* <p className="card-text">{movie.primaryImage.caption.plainText}</p> */}
                <Link to={`/movies/${movie.id}`} className="btn btn-outline-primary">Details</Link>
            </div>
        </div>
    )
}

export default MovieCard