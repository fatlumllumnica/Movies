import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'





function Movie() {

  const [movie, setMovie] = useState()
  const {id} = useParams()
  const noimage = "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"

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
    <div className="card mb-3" style={{height: '310px'}}>
      { movie && (
        <>
            <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" alt="noimage" style={{height: "450px", width:"auto"}}/>
            
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{movie.titleText.text}</h5>
            </div>
        </>
      )
    }
    </div>
 )
}

export default Movie