import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    qrContainer : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    formRoot: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
            justifyContent:'center'
          },
    },

    largeField : {
        width:'100%'
    },

    [theme.breakpoints.up('sm')] : {
        largeField: {
            width:'80%'
        }
    }
}));

export default styles;