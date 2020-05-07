import globalStyles  from 'components/globalStyles.js';

const styles = {
    container: {
        margin: '15px',
        width: '300px',
        cursor: 'pointer',
        marginTop: '30px',
    },
    title: {
        fontWeight: '400',
        margin: '10px 0 0 0',
    },
    imageWrapper: {
        position: 'relative',
        height: '165px',
        textAlign: 'center',
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
    image: {
        borderRadius: globalStyles.boxBorderRadius,
        width: '300px',
        textAlign: 'center',

        webkitTransform: 'scale(1)',
        transform: 'scale(1)',
        webkitTransition: '.3s ease-in-out',
        transition: '.3s ease-in-out',

        '&:hover': {
            webkitTransform: 'scale(1.2)',
            transform: 'scale(1.2)',
        }
    },
    info: {
        fontSize: '12px',
    }
};

export default styles;