import React from 'react'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import ErrorIcon from '@material-ui/icons/Error'
import SuccessIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import CloseIcon from '@material-ui/icons/Close'

export default class Notif extends React.Component{
    actualNotif() {
        return this.props.notifs.length > 0 ? this.props.notifs[0] : false
    }

    calculateSlide() {
        let color = 'inherit'

        if (this.actualNotif() !== false) {
            switch (this.actualNotif().type) {
                case 'error':
                    color = '#d32f2f'
                    break

                case 'success':
                    color = '#43a047'
                    break

                case 'warning':
                    color = '#ffa000'
                    break

                case 'default':
                default:
                    color = '#3f51b5'
            }
        }


        return (props) => <Slide {...props} style={{backgroundColor: color}} direction="down" />
    }

    calculateIcon() {
        let type = this.actualNotif() ? this.actualNotif().type : 'info'

        switch (type) {
            case 'warning':
                return WarningIcon

            case 'error':
                return ErrorIcon

            case 'success':
                return SuccessIcon

            case 'info':
            default:
                return InfoIcon
        }
    }

    render() {
        const CustomSlide = this.calculateSlide()

        function CloseButton(props) {
            return (
                <IconButton {...props} onClick={(e) => props.onClose(e, 'clickcross')} aria-label="Close" color="inherit">
                    <CloseIcon />
                </IconButton>
            )
        }

        const onClose = (event, reason) => {
            if (reason !== 'clickaway') {
                this.props.onClose()
            }
        }

        return (
            <Snackbar
                onClose={onClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={this.actualNotif() !== false}
                TransitionComponent={CustomSlide}
                ContentProps={{'aria-describedby': 'message-id'}}
                autoHideDuration={5000}
                message={this.renderMessage()}
                action={this.onClose !== false ? [<CloseButton key="close" onClose={onClose}/>] : []}
            />
        )
    }

    renderMessage() {
        const Icon = this.calculateIcon()

        return (
            <span style={{display: 'flex', alignItems: 'center'}}>
                <Icon /><span style={{paddingLeft: '10px'}}>{this.actualNotif() && this.actualNotif().message || ''}</span>
            </span>
        )
    }
}

Notif.defaultProps = {
    notifs: [],
    onClose: false,
}

Notif.propTypes = {
    notifs: PropTypes.array,
    onClose: PropTypes.func,
}
