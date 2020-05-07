const boxBorderRadius = '2px';
const smallFontSize = '12px';
const containerMinWidth = '1200px';
const actionColor = '#ffa500';

const maxContentWidth = '1340px';

// buttons
const actionButtonBackgroundColor = 'rgba(69, 106, 114, 1)';
const actionButtonDisabledBackgroundColor = 'rgba(69, 106, 114, 0.3)';
const actionButtonHoverBackgroundColor = 'rgba(255, 165, 0, 0.9)';
const boxShadow =  '0px 2px 48px -13px rgba(0,27,38,1)';

// text
const textColor = '#001B26';
const textColorLight = '#F2F2F2';
const textHoverBackgroundColor = 'rgba(69, 106, 114, 0.3)';
const disabledTextColor = '#8EA1A5';


// image
const defaultImageBackground = 'rgba( 10, 53, 63, 1)';


const actionButtonStyle = {
    display: 'inline-block',
    borderRadius: '2px',
    height: '24px',
    border: '0',
    background: actionButtonBackgroundColor,
    color: '#F2F2F2',
    verticalAlign: 'top',
    fontSize: smallFontSize,
    padding: '5px 10px',
    cursor: 'pointer',
    '&:hover': {
        boxShadow,
        background: actionButtonHoverBackgroundColor,
    },
    '&:active': {
        border: 'none',
        background: actionButtonHoverBackgroundColor,
    },
    '&:focus': {
        outline: 'none',
    },
}

const globalStyles = {
    maxContentWidth,
    boxBorderRadius,
    smallFontSize,
    containerMinWidth,
    actionButtonBackgroundColor,
    actionButtonDisabledBackgroundColor,
    actionButtonHoverBackgroundColor,
    boxShadow,
    actionButtonStyle,
    actionColor,
    textColor,
    textColorLight,
    textHoverBackgroundColor,
    disabledTextColor,
    defaultImageBackground,
};


export default globalStyles;