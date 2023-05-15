import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

function Movies() {

  const [title, setTitle]= useState('')
  const [releaseYear, setReleaseYear]= useState('')
  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
        'X-RapidAPI-Key': '829648456bmsh03b82ff65c18e8ep1178b5jsn8e332ca3fe52',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

  const searchByTitle = (e) => {
      setReleaseYear(undefined)
      setTitle(e.target.value)
 
      switch (e.keyCode) {
        case 13: 
        
            axios.request(options).then((response) => {
                const sMovies = response.data.results.filter(movie => movie.titleText.text.includes(title))
                setMovies(sMovies)
                e.target.value = '' 
            }).catch((error) => {
                console.log(error)});
        break;
  }
}

  const searchByReleaseYear = (e) => {
    setTitle(undefined)
    setReleaseYear(e.target.value)
 
      switch (e.keyCode) {
        case 13: 
        
            axios.request(options).then((response) => {
                const sMovies = response.data.results.filter(movie => movie.releaseYear.year == releaseYear)
                setMovies(sMovies)
                e.target.value = ''
            }).catch((error) => {
                console.log(error)});
        break;
  }

  }



  return (
    <>

    <section className="search py-4">
      <div className='container d-flex justify-content-between gap-4 '>
        <input type="text" placeholder='Enter movie title' className='form-control' onKeyUp={searchByTitle} />
        <input type="text" placeholder='Enter release year' className='form-control' onKeyUp={searchByReleaseYear} />


      </div>
    </section>

    <section className="movies bg-light py-4">
      <div className='container'>

        { movies.length> 0 && <h2 className='text-center mb-4'> Search results for {title && title} {releaseYear && releaseYear}</h2>}

        <div className="row">
            {
                movies && movies.map((movie)=> <div key={movie.id} className='col-lg-3 col-md-4 col-sm-12'><MovieCard  movie={movie}/></div>)
            }
        </div>

      </div>
    </section>
    
    </>
  )
}


export default Movies