import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    root : {
        height:'90vh',
        flexGrow:'1',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    btnContainer : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    btn : {
        margin:'30px',
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

    [theme.breakpoints.up('md')] : {
        btnContainer : {
            flexDirection:'row',
            justifyContent:'space-around',
        },
        btn : {
            fontSize:'35px',
        }
    }
}));

export default styles;