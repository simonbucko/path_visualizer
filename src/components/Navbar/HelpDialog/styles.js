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
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}))