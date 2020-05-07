import React from "react";
import { useParams } from 'react-router-dom';
import SearchInput from 'components/SearchInput/index.jsx';
import githubIcon from 'images/icon.png';

import styles from './styles.js';

export default function TopBannerControllers(props){
    const { onSearchInputChange, inputValue, onSearch, keyWords, onSelectKeyWord, page, totalPages, onRedirectToMoviesList, onFetchPrevPage ,onFetchNextPage, hasMovies  } = props;
    const { movieId } = useParams();

    return (
        <div css={styles.controllers}>
            <div css={styles.backButtonWrapper}>
                {movieId &&  <button onClick={onRedirectToMoviesList} css={styles.actionButton}>{'Go back to list'}</button>}
            </div>
            <SearchInput
                onChange={onSearchInputChange}
                value={inputValue}
                onSearch={onSearch}
                keyWords={keyWords}
                onSelectKeyword={onSelectKeyWord}
            />
            <div css={styles.pageButtonsWrapper}>
                {!movieId &&
                    <React.Fragment>
                        <button
                            disabled={page === 1}
                            onClick={onFetchPrevPage}
                            css={[styles.actionButton, styles.previousPage, page === 1 ? styles.disabled : '']}
                        >
                            {'Previous page'}
                        </button>
                        <button
                            disabled={page === totalPages || !hasMovies}
                            onClick={onFetchNextPage}
                            css={[styles.actionButton, page === totalPages || !hasMovies ? styles.disabled : '']}
                        >
                            {'Next page'}
                        </button>
                    </React.Fragment>
              }
            </div>
            <div css={styles.repoLinkWrapper}>
                <a href={'https://github.com/Sherri010/LM.git'} target={'_blank'}>
                    <img src={githubIcon} css={styles.githubIcon} alt={'github icon'}/>
                </a>
            </div>
        </div>
    )
}