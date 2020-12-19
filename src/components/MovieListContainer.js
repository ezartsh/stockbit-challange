import React from 'react';
import MovieCard from './MovieCard';

export default class MovieListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-start mt-2">
                    {
                        this.props.movies.map((i, k) => {
                            if(this.props.movies.length === k + 1) {
                                return (
                                    <MovieCard refs={this.props.reference} key={k} item={i}/>
                                );
                            }else{
                                return (
                                    <MovieCard key={k} item={i}/>
                                );
                            }
                        })
                    }
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <h3 className="text-muted">Loading...</h3>
                </div>
            </div>
        );
    };
}
