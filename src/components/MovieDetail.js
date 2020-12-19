import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function MovieDetail (props)
{
    let { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&i=${id}&plot=full`)
        .then(({ data, status }) => {
            if(status === 200) {
                setMovie(data);
            }
        });
    }, []);

    return (
        <div className="container">
            <div className="row mt-4">
                {
                    movie ? 
                        <>
                            <div className="col-12 col-sm-5">
                                <img src={movie.Poster} className="w-100" alt=""/>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="movie-information flex">
                                    <div className="movie-title d-flex flex-row align-items-center">
                                        <h1>{movie.Title}</h1>
                                        <small className="rounded bg-success ml-2 d-flex align-items-center justify-content-center px-2 py-1">
                                            <span className="text-white">{movie.Rated}</span>
                                        </small>
                                    </div>
                                    <div className="mini-list">
                                        <ul style={{ listStyleType: 'none', paddingInlineStart: '0px' }}>
                                            <li>{Math.floor(movie.Runtime.replace(' min', '') / 60)}h {movie.Runtime.replace(' min', '') % 60}m</li>
                                            <li>{movie.Genre}</li>
                                            <li>{movie.Released} ({movie.Country})</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <ul style={{ listStyleType: 'none', paddingInlineStart: '0px' }}>
                                            <li>
                                                <span className="font-weight-bold">Director</span> : {movie.Director}
                                            </li>
                                            <li>
                                                <span className="font-weight-bold">Writer</span> : {movie.Writer}
                                            </li>
                                            <li>
                                                <span className="font-weight-bold">Actors</span> : {movie.Actors}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        Meta Score : {movie.Metascore} <br />
                                        IMDB Rating : <FontAwesomeIcon icon={faStarChecked} style={{color: 'orange'}}/> {movie.imdbRating} ({movie.imdbVotes} Users)
                                    </div>
                                    <div className="mt-4">
                                        <h6>Synopsis : </h6>
                                        <p className="text-justify font-italic">
                                            {movie.Plot}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    :
                    ''
                }
            </div>
        </div>
    );
}

export default MovieDetail;
