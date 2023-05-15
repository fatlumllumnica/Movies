import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'






function Ratings({id}) {

  const [ratings, setRatings] = useState()
//   const {id} = useParams()
  const noimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"

  useEffect(() => {

      const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles/'+id+'/ratings',
          headers: {
            'X-RapidAPI-Key': '829648456bmsh03b82ff65c18e8ep1178b5jsn8e332ca3fe52',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
      };

      axios.request(options).then(function (response) {
        setRatings(response.data.results);
      }).catch (function (error) {
	                console.error(error);
                  });

  }, [])

  

  return (
    <div className="container my-5">
    
    { ratings !== null && (
      <>
      <h3>Ratings</h3>
     
     <p>{ratings && ratings.averageRating}</p>
      </>
    )}
     

    </div>
 )
}

export default Ratings