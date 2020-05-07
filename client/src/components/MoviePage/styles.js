import globalStyles  from 'components/globalStyles.js';

const styles = {
    container: {
        width: '100%',
        height: '100%',
        minWidth: globalStyles.containerMinWidth,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        height: '600px',
        marginBottom: '50px',
    },
    title: {
        marginTop: '0',
    },
    posterWrapper: {
        position: 'relative',
        width: '400px',
        overflow: 'hidden',
        background: globalStyles.defaultImageBackground,
        borderRadius: globalStyles.boxBorderRadius,
    },
    overlay: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        height: '100%',
        width: '100%',
        opacity: '0',
        transition:' .5s ease',

        '&:hover': {
            opacity: 0.5,
        }
    },
    text: {
        color: globalStyles.disabledTextColor,
        position: 'absolute',
        top: '50%',
        left: '50%',
        webkitTransform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    poster: {
        width: '400px',
        height: '600px',
        borderRadius: globalStyles.boxBorderRadius,

        webkitTransform: 'scale(1)',
        transform: 'scale(1)',
        webkitTransition: '.3s ease-in-out',
        transition: '.3s ease-in-out',

        '&:hover': {
            webkitTransform: 'scale(1.2)',
            transform: 'scale(1.2)',
        }
    },
    information: {
        padding: '0 25px',
        minWidth: '300px',
        width: '800px',
    },
    relatedMovies: {
        display: 'flex',
        alignContent: 'flex-start',
        flexFlow: 'wrap',
    },
    relatedMovieCardWrapper: {
        flexBasis: '200px',
        margin: '15px 0',
    },
    sectionsWrapper: {
      marginTop: '50px',
    },
    section: {
        margin: '5px 0',
        display: 'flex',
        width: '100%',
    },
    label: {
        flexBasis: '250px',
        color: '#8EA1A5',
    },
    value: {
        flexBasis: `calc(100% - 250px)`,
    },
    loading: {
        width: '100px',
        textAlign: 'center',
    },
    similarMoviesTitle: {
        margin: '50px 0 0 15px',
    }
};

export default styles;