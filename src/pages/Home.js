import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Home() {

    const [slides, setSlides] = useState([])


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
            setSlides(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error)});
        }, [])



  return (
    <>

    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
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

</>
)
}

export default Home