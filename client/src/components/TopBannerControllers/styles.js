import globalStyles  from 'components/globalStyles.js';

const styles = {
    controllers: {
        flexBasis: '800px',
        minWidth: '700px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    previousPage: {
        marginRight: '5px',
    },
    pageButtonsWrapper: {
        width: '200px',
    },
    backButtonWrapper: {
        width: '100px',
    },
    actionButton: globalStyles.actionButtonStyle,
    disabled: {
        background: globalStyles.actionButtonDisabledBackgroundColor,
        color: globalStyles.disabledTextColor,
        cursor: 'default',
        '&:hover': {
            background:  globalStyles.actionButtonDisabledBackgroundColor,
        }
    },
    githubIcon: {
        width: '35px',
    },
    repoLinkWrapper: {
        position: 'absolute',
        right: '20px',
        top: '5px',
    }
};

export default styles;