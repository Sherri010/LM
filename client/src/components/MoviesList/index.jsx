import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { jsx } from '@emotion/core';
import styles from './styles.js'

import MovieCard from 'components/MovieCard/index.jsx';
import MoviePage from 'components/MoviePage/index.jsx';
import TopBannerControllers from 'components/TopBannerControllers/index.jsx';

// const base_url = `http://localhost:8000`;

export default function MoviesList(){
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [keyWords, setKeyWords] = useState([]);
    const [search, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { movieId } = useParams();
    const history = useHistory();
    const contentWrapperRef = useRef(null);

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    useEffect(() => {
        if(search){
            queryMovies();
        } else {
            fetchPopularMovies();
        }
    }, [page, search]);

    useEffect(() => {
        if(inputValue){
            fetchMatchingKeyWords();
        }
    }, [inputValue]);

    const fetchPopularMovies = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/movies?page=${page}`);
            setMovies(response.data.results);
            setTotalPages(response.data.totalPages);
            setIsLoading(false);
        } catch (e) {
            console.log(e.message);
        }
    }

    const queryMovies = async () => {
        try {
            const response = await axios.get(`/api/movies/search?query=${search}&page=${page}`);
            setMovies(response.data.results);
            setTotalPages(response.data.totalPages);
            setIsLoading(false);
        } catch (e) {
            console.log(e.message);
        }
    }

    const fetchMatchingKeyWords = async () => {
        try {
            const response = await axios.get(`/api/movies/keywords?query=${inputValue}`);
            setKeyWords(response.data.results);
        } catch (e) {
            console.log(e.message);
        }
    }

    const handleInputValueChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if(!value){
            setKeyWords([]);
        }
    }

    const handleSearch = (searchString) => {
        if(movieId){
           history.push({
               pathname: '/',
           });
        }

        setPage(1);
        setSearchValue(searchString);
        setKeyWords([]);

        if(!searchString){
            setInputValue('');
            setKeyWords([]);
        }
    }

    const handleFetchNextPage = () => {
        setPage((page) => page + 1  <= totalPages ? page + 1 : totalPages);
    }

    const handleFetchPrevPage = () => {
        setPage((page) => page - 1 > 0 ? page - 1 : 0);
    }

    const handleClearSearch = () => {
        setSearchValue('');
        setInputValue('');
        setKeyWords([]);
    }

    const handleSelectKeyWord = (keyword) => {
        setInputValue(keyword.name);
    }

    const handleRedirectToMoviesList = () => {
        history.push({
            pathname: '/',
        })
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const renderMovieCard = (movie, index) => {
        return (
            <div key={index} >
                <MovieCard movie={movie} onMovieClick={handleScrollToTop}/>
            </div>

        )
    }

    const renderContent = () => {
        if(isLoading){
            return <div css={styles.loading}>{'Loading...'}</div>
        }else if(movieId){
            return <MoviePage onMovieClick={handleScrollToTop}/>;
        } else {
            if(!movies.length && search){
                return (
                    <div css={styles.noResultsWrapper}>
                        <h4>{`Your search '${search}' did not return any results!`}</h4>
                        <button onClick={handleClearSearch} css={styles.actionButton}>{'clear search'}</button>
                    </div>
                );
            }
            return movies.map(renderMovieCard);
        }
    }

    return (
        <div css={styles.container} ref={contentWrapperRef}>
            <div css={styles.topBanner}>
                <TopBannerControllers
                    hasMovies={movies && movies.length > 0}
                    onSearchInputChange={handleInputValueChange}
                    inputValue={inputValue}
                    onSearch={handleSearch}
                    keyWords={keyWords}
                    onSelectKeyWord={handleSelectKeyWord}
                    page={page}
                    totalPages={totalPages}
                    onRedirectToMoviesList={handleRedirectToMoviesList}
                    onFetchPrevPage={handleFetchPrevPage}
                    onFetchNextPage={handleFetchNextPage}
                />
            </div>
            <div css={styles.content}>
                {renderContent()}
            </div>
        </div>
    );
}

