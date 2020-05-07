import globalStyles  from 'components/globalStyles.js';

const height = '24px';
const inputWidth = '240px';

const styles = {
    searchInputWrapper: {
        margin: '12px 35px',
        textAlign: 'center',
        position: 'relative',
    },
    searchInput: {
        position: 'relative',
        width: '300px',
    },
    input: {
        border: '0',
        borderRadius: '2px 0 0 2px',
        height,
        width: inputWidth,
        '&:focus': {
            outline: 'none',
        },
    },
    searchButton: {
        borderRadius: '0 2px 2px 0',
        height,
        border: '0',
        background: globalStyles.actionButtonBackgroundColor,
        color: globalStyles.textColorLight,
        verticalAlign: 'top',
        '&:hover': {
            boxShadow: globalStyles.boxShadow,
        }
    },
    clearSearch: {
        position: 'absolute',
        right: '65px',
        top: '3px',
        color: globalStyles.actionButtonBackgroundColor,
        background: 'while',
        cursor: 'pointer',
    },
    keyWordsDropdown: {
        position: 'absolute',
        width: inputWidth,
        left: '0',
        zIndex: '100',
        background: 'white',
        margin: '2px',
        maxHeight: '150px',
        overflow: 'auto',
        borderRadius: globalStyles.boxBorderRadius,
    },
    keyword: {
        cursor: 'pointer',
        padding: '5px 15px',
        color: globalStyles.textColor,
        textAlign: 'left',
        '&:hover':{
            background: globalStyles.textHoverBackgroundColor,
        },
    },
    actionButton: globalStyles.actionButtonStyle,
    disabled: {
        background: globalStyles.actionButtonDisabledBackgroundColor,
        color: globalStyles.disabledTextColor,
        cursor: 'default',
    },
};

export default styles;