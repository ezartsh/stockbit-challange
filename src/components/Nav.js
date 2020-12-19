import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props)
{
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Movie App
                </Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.query} onChange={props.onHandleSearch} />
                </form>
            </div>
        </nav>
    );
}
