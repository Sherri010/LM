import React from 'react';

import styles from './styles.js';

export default function SearchInput(props){
    const { onChange, value, onSearch, keyWords, onSelectKeyword } = props;

    return (
        <div css={styles.searchInputWrapper}>
            <div css={styles.searchInput}>
                <input css={styles.input} onChange={onChange} value={value} />
                {value && <div css={styles.clearSearch} role={'button'} onClick={() => onSearch('')}>{'x'}</div>}
                {keyWords.length > 0 && (
                    <div css={styles.keyWordsDropdown}>
                        {keyWords.map((keyword) => <div onClick={() => onSelectKeyword(keyword)} css={styles.keyword}>{keyword.name}</div>)}
                    </div>
                )}
                <button css={[styles.actionButton, styles.searchButton]} onClick={() => onSearch(value)}>{'Search'}</button>
            </div>
        </div>
    )
}