import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    root : {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'90vh'
    },
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
    btn : {
        margin:'10px',
        width:'auto',
        fontSize:'15px',
        color:'#963CBDFF',
        backgroundColor:'#FF6F61FF',
        border:'2px solid #963CBDFF',
        '&:hover' : {
            color: '#FF6F61FF',
            backgroundColor:'#963CBDFF',
            boxShadow:' 8px 9px 5px -2px rgba(0,0,0,0.58)'
        }
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