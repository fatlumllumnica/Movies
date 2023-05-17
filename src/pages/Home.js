import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard';


function Home() {

    const [movies, setMovies] = useState([])


    useEffect(() => { 

        // const axios = require('axios');

        const options = {
                method: 'GET',
                url: 'https://moviesdatabase.p.rapidapi.com/titles',
                headers: {
                    'X-RapidAPI-Key': '829648456bmsh03b82ff65c18e8ep1178b5jsn8e332ca3fe52',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
        };

        axios.request(options).then((response) => {
            setMovies(response.data.results);
            // console.log(response.data.results)
        }).catch((error) => {
            console.log(error)});
        }, [])



  return (
    <>
    <section className='slider'>
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner" style={{height:"300px"}}>

            {
                movies && movies.map( (movie, index) => {
                    if(movie.primaryImage !== null) {
                        return (
                            <div className={ index === 0 ? 'carousel-item active' : 'carousel-item'} key={movie.id}>
                                <img src={movie.primaryImage.url} className="d-block w-100" alt="..."/>
                            </div>
                        );
                    }
                
                })
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </section>
    <section className='latest-movies bg-light py-5'>
        <div className="container">
            <h3 className='mb-5 text-center'>Latest movies</h3>
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

export default Home