import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    dialogTitle: {
        fontSize: '3em',
    },
    dialogContent: {
        overflowX: 'hidden',
        color: '#000344',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    stepper: {
        background: 'white',
    },

    closeIcon: {
        position: 'absolute',
        right: '5px',
        top: '5px',
        fontSize: '35px !important',
        cursor: 'pointer'
    }
}))