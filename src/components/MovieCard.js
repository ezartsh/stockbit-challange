import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function MovieCard (props) {

    const [show, setShow] = useState(false);

    const handleClose   = () => setShow(false);
    const handleShow    = () => setShow(true);
    
    return (
        <>
            <div className="col-6 col-sm-2 my-2" ref={props.refs}>
                <div className="card movie h-100">
                    <div className="card-body movie-image p-0">
                        <a href="#" className="d-inline-block position-relative stretched-link h-100" onClick={handleShow}>
                            <img className="w-100 h-100" src={props.item.Poster} alt={props.item.Title} />
                        </a>
                    </div>
                    <div className="footer p-2">
                        <div className="movie-meta text-primary">
                            <span>{props.item.Year}</span>
                            <span>{props.item.Type}</span>
                        </div>
                        <div className="movie-title">
                            <Link to={`/movie-detail/${props.item.imdbID}`}>
                                <h6>{props.item.Title}</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <img className="w-100 h-100" src={props.item.Poster} alt={props.item.Title} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MovieCard;
