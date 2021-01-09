import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './requests';
import axios from './axios';

function Banner() {

    const [movie,setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals)

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])

            return request;
        }
        fetchData();
    }, []);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{
            backgoundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className = "banner_contents">
                <h1 className = "header_title">
                {movie?.title || movie.name || movie?.orignal_name}
                </h1>
                <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className = "banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className = "banner_fadeBottom" ></div>
        </header>
    )
}

export default Banner
