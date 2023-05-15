import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Ratings from '../components/Ratings'





function Movie() {

  const [movie, setMovie] = useState()
  const {id} = useParams()
  const noimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"

  useEffect(() => {

      const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles/'+id,
          headers: {
            'X-RapidAPI-Key': '829648456bmsh03b82ff65c18e8ep1178b5jsn8e332ca3fe52',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
      };

      axios.request(options).then(function (response) {
        setMovie(response.data.results);
      }).catch (function (error) {
	               console.error(error);
                  });

  }, [])

  

  return (
    <div className="container my-5 d-flex" style={{height: 'auto', border: "1px solid red"}}>

      { movie && (
        <>
            <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" alt="noimage" style={{height: "450px", width:"auto"}}/>
            
            <div className="card-body justify-content-between align-items-center my-5 mx-5 col-8 " style={{border:"1px solid green", width:"800px"}}>
                <h5 className="card-title">{movie.titleText.text}</h5>
                <p> Release year: {movie.releaseYear.year}</p>
            </div>
            <Ratings id={movie.id} />
        </>
      )
    }
    </div>
 )
}

export default Movie