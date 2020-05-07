import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize';
import styles from './styles.js';

import App from 'components/App/index.jsx';

ReactDOM.render(
    <div>
        <Global
            styles={css`
                ${emotionNormalize}
                ${styles}
            `}
        />
        <App/>
    </div>
    ,
    document.getElementById('root'),
);

