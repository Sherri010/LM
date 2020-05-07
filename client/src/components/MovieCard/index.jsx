import React from 'react';
import { useHistory } from 'react-router-dom';
import { jsx } from '@emotion/core';

import styles from './styles';

const image_base_url = `https://image.tmdb.org/t/p/w500`;

export default function MovieCard(props){
    const { onMovieClick } = props;
    const history = useHistory();
    const {
        movie: {
            id,
            backdrop_path,
            poster_path,
            title,
            popularity,
        }
    } = props;

    const handleRedirectToMoviePage = () => {
        history.push({
            pathname: `/movies/${id}`,
        });
        onMovieClick();
    }

    let imageNode =  <img alt={`${title} poster`} src={`${image_base_url}${backdrop_path || poster_path}`} css={styles.image}/>;

    if(!(backdrop_path || poster_path)){
        imageNode = (
            <div css={styles.overlay}>
                <div css={styles.text}>{'Poster not available!'}</div>
            </div>
        )
    }


    return (
        <div
             css={styles.container}
             role={'button'}
             onClick={handleRedirectToMoviePage}
        >
            <div css={styles.imageWrapper}>
                {imageNode}
            </div>
            <div>
                <h4 css={styles.title}>{title}</h4>
                <p css={styles.info}>{'Popularity: '}{parseFloat(popularity).toFixed(1)}</p>
            </div>
        </div>
    )
}