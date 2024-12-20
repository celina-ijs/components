import * as Styles from '@ijstech/style';
let Theme = Styles.Theme.ThemeVars;

export const getOverlayStyle = () => {
    return Styles.style({
        backgroundColor: 'rgba(12, 18, 52, 0.7)',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        visibility: 'hidden',
        zIndex: 1000,
        transition: 'visibility 0s linear .25s, opacity .25s',
        $nest: {
            '&.show': {
                opacity: '1',
                visibility: 'visible',
                transition: 'visibility 0s linear, opacity .25s'
            }
        }
    })
}

export const getNoBackdropStyle = () => {
    return Styles.style({
        position: 'inherit',
        top: 0,
        left: 0,
        opacity: 0,
        visibility: 'hidden',
        transform: 'scale(0.8)',
        transition: 'visibility 0s linear .25s,opacity .25s 0s,transform .25s',
        zIndex: 1000,
        maxWidth: 'inherit',
        $nest: {
            '.popover': {
                margin : '0'
            },
            '&.show': {
                opacity: '1',
                visibility: 'visible',
                transform: 'scale(1)',
                transition: 'visibility 0s linear 0s,opacity .25s 0s,transform .25s'
            }
        }
    })
}

export const getAbsoluteWrapperStyle = (left: string, top: string) => {
    return Styles.style({
        left: left,
        top: top,
        width: 'inherit',
        height: 'inherit'
    })
}

export const popoverMainContentStyle = Styles.style({
    fontFamily: 'Helvetica',
    fontSize: '14px',
    padding: '10px 10px 5px 10px',
    backgroundColor: Theme.background.modal,
    position: 'relative',
    borderRadius: '2px',
    width: 'inherit',
    maxWidth: '100%'
})

Styles.cssRule('i-popover', {
    position: 'absolute',
    left: '0',
    top: '0'
})

const arrowBackgroundColor = "var(--tooltips-arrow-background, rgba(97, 97, 97, 0.92))";

export const popoverArrowStyle = Styles.style({
    position: 'relative',
    $nest: {
        '&.is-top::after': {
            content: "''",
            position: "absolute",
            top: "100%",
            left: "50%",
            zIndex: 888,
            marginLeft: "-5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `${arrowBackgroundColor} transparent transparent transparent`,
        },
        '&.is-topLeft::after': {
            content: "''",
            position: "absolute",
            top: "100%",
            left: "0%",
            marginLeft: "12px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `${arrowBackgroundColor} transparent transparent transparent`,
        },
        '&.is-topRight::after': {
            content: "''",
            position: "absolute",
            top: "100%",
            right: "0%",
            marginRight: "12px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `${arrowBackgroundColor} transparent transparent transparent`,
        },
        '&.is-left::after': {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "100%",
            marginTop: "-5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent transparent transparent ${arrowBackgroundColor}`,
        },
        '&.is-right::after': {
            content: "''",
            position: "absolute",
            top: "50%",
            right: "100%",
            marginTop: "-5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent ${arrowBackgroundColor} transparent transparent`,
        },
        '&.is-rightTop::after': {
            content: "''",
            position: "absolute",
            top: "0%",
            right: "100%",
            marginTop: "5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent ${arrowBackgroundColor} transparent transparent`,
        },
        '&.is-bottom::after': {
            content: "''",
            position: "absolute",
            bottom: "100%",
            left: "50%",
            marginLeft: "-5px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent transparent ${arrowBackgroundColor} transparent`,
        },
        '&.is-bottomLeft::after': {
            content: "''",
            position: "absolute",
            bottom: "100%",
            left: "0%",
            marginLeft: "12px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent transparent ${arrowBackgroundColor} transparent`,
        },
        '&.is-bottomRight::after': {
            content: "''",
            position: "absolute",
            bottom: "100%",
            right: "0%",
            marginRight: "12px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `transparent transparent ${arrowBackgroundColor} transparent`,
        }
    }
})