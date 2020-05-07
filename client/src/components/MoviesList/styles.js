import globalStyles  from 'components/globalStyles.js';


const styles = {
    container: {
        height: '100%',
        position: 'relative',
        minWidth:  globalStyles.containerMinWidth,
    },
    topBanner: {
        position: 'sticky',
        top: '0',
        left: '0',
        width: '100%',
        height: '50px',
        background: '#0A353F',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '100',
    },
    content: {
        margin: '0 auto',
        maxWidth: globalStyles.maxContentWidth,
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'wrap',
        padding: '70px 10px',
    },
    actionButton: globalStyles.actionButtonStyle,
    noResultsWrapper: {
        textAlign: 'center',
        margin: '25px',
        width: '100%',
    },
    loading: {
        width: '100%',
        textAlign: 'center',
    }
};

 export default styles;