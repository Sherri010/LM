const express = require('express');
const router = express.Router();
const axios = require("axios");

const TMDB_URL = `https://api.themoviedb.org/3`;

router.get('/api/movies', async function(req, res){
    const getData = async () => {
        try {
            const response = await axios.get(`${TMDB_URL}/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}&page=${req.query.page}`);
            if(response.status === 200){
                return response.data;
            }

            return [];
        } catch (error) {
            console.log(error);
        }
    };

    const response = await getData();

    res.json({ results: response.results, totalPages: response.total_pages, totalResults: response.total_results });
});

router.get('/api/movies/search', async function(req, res){
    const getData = async () => {
        try {
            const response = await axios.get(`${TMDB_URL}/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query='${req.query.query}'&page=${req.query.page}`);

            if(response.status === 200){
                return response.data;;
            }

            return [];
        } catch (error) {
            console.log(error);
        }
    };

    const response = await getData();

    res.json({ results: response.results, totalPages: response.total_pages, totalResults: response.total_results });
});

router.get('/api/movies/keywords', async function(req, res){
    const getData = async () => {
        try {
            const response = await axios.get(`${TMDB_URL}/search/keyword?api_key=${process.env.MOVIEDB_API_KEY}&query='${req.query.query}'`);

            if(response.status === 200){
                return response.data;;
            }

            return [];
        } catch (error) {
            console.log(error);
        }
    };

    const response = await getData();

    res.json({ results: response.results });
});

router.get('/api/movies/:movieId', async function (req, res) {
    const getData = async () => {
        try {
            const response = await axios.get(`${TMDB_URL}/movie/${req.params.movieId}?api_key=${process.env.MOVIEDB_API_KEY}`);

            if(response.status === 200){
                return response.data;;
            }

            return {};
        } catch (error) {
            console.log(error);
        }
    };

    const data = await getData();

    res.json({ ...data });
});

router.get('/api/movies/:movieId/related', async function(req, res){
    const getData = async () => {
        try {
            const response = await axios.get(`${TMDB_URL}/movie/${req.params.movieId}/similar?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1'`);

            if(response.status === 200){
                return response.data;;
            }

            return [];
        } catch (error) {
            console.log(error);
        }
    };

    const response = await getData();

    res.json({ results: response.results });
});

module.exports = router;
