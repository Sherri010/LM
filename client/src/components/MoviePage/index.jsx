import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {format as formatDate} from 'date-fns';
import { jsx } from '@emotion/core';
import axios from 'axios';

import MovieCard from 'components//MovieCard/index.jsx';

import styles from './styles.js';

const base_url = `http://localhost:8000`;
const image_base_url = `https://image.tmdb.org/t/p/w500`;

function MoviePage(props){
    const { onMovieClick } = props;
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${base_url}/api/movies/${movieId}`);
                setIsLoading(false);
                setMovie(response.data);
                const relatedMovies = await axios.get(`${base_url}/api/movies/${movieId}/related`);
                setRelatedMovies(relatedMovies.data.results);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, [movieId]);

    const renderRelatedMovie = (movie ,index) => {
        return (
            <div key={index} css={styles.relatedMovieCardWrapper}>
                <MovieCard movie={movie} onMovieClick={onMovieClick}/>
            </div>
        );

    }

    const { id, genres = [], poster_path, runtime, overview, title, release_date, popularity, tagline } = movie;
    const poster_url = `${image_base_url}${poster_path}`;

    if(!id && !isLoading){
        return (
            <div css={styles.container}>
                <h3>{'This movie was not found!'}</h3>
            </div>
        )
    }

    let imageNode = <img alt={`${title} poster`} src={poster_url} css={styles.poster}/>;

    if(!poster_path){
        imageNode = (
            <div css={styles.overlay}>
                <div css={styles.text}>{'Poster not available!'}</div>
            </div>
        )
    }

    const showRelativeMovies = !!(relatedMovies && relatedMovies.length > 0);

    if(!movie){
        return (<div css={styles.loading}>{'Loading...'}</div>);
    }

    return (
        <div css={styles.container}>
            <div css={styles.content}>
                <div css={styles.posterWrapper}>
                    {imageNode}
                </div>
                <div css={styles.information}>
                    <h1 css={styles.title}>{movie.title}</h1>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                    <div css={styles.sectionsWrapper}>
                        <div css={styles.section}>
                            <span css={styles.label}>{'Genre:'}</span>
                            <span css={styles.value}>{`${genres.map(({ name }) => name).join(', ')}`}</span>
                        </div>
                        {release_date &&
                        <div css={styles.section}>
                            <span css={styles.label}>{`Year made:`}</span>
                            <span css={styles.value}>{`${formatDate(new Date(release_date), 'yyyy')}`}</span>
                        </div>}
                        <div css={styles.section}>
                            <span css={styles.label}>{`Duration:`}</span>
                            <span css={styles.value}>{`${runtime} mins`}</span>
                        </div>
                        <div css={styles.section}>
                            <span css={styles.label}>{`Popularity:`}</span>
                            <span css={styles.value}>{`${parseFloat(popularity).toFixed(1)}`}</span>
                        </div>
                    </div>
                </div>
            </div>
            {showRelativeMovies &&
                <React.Fragment>
                    <h2 css={styles.similarMoviesTitle}>{'Similar movies:'}</h2>
                    <div css={styles.relatedMovies}>
                        {relatedMovies.map(renderRelatedMovie)}
                    </div>
                </React.Fragment>
           }
        </div>
    );
}

export default MoviePage;