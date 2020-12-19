import { useState, useRef, useCallback } from 'react';
import Nav from './components/Nav';
import MovieListContainer from './components/MovieListContainer';
import MovieDetail from './components/MovieDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieSearch from './components/MovieSearch';

function App() {
    const [query, setQuery] = useState('Batman');
    const [pageNumber, setPageNumber] = useState(1);

    const {
        movies,
        hasMore,
        loading,
        error
    } = MovieSearch(query, pageNumber)

    const observer = useRef();
    const lastMovieElementRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        });
        if(node) observer.current.observe(node);
    }, [ loading, hasMore ]);

    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }

    return (
        <Router>
            <div className="container">
                <Nav onHandleSearch={handleSearch} query={query}/>
                <Switch>
                    <Route path="/" exact component={() => <MovieListContainer movies={movies} hasMore={hasMore} loading={loading} error={error} reference={lastMovieElementRef} />} />
                    <Route path="/movie-detail/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
