import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({

    root : {
        height:'70vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },

    btn : {
        margin:'30px',
        width:'auto',
        fontSize:'12px',
        color:'#963CBDFF',
        backgroundColor:'#FF6F61FF',
        border:'2px solid #963CBDFF',
        '&:hover' : {
            color: '#FF6F61FF',
            backgroundColor:'#963CBDFF',
            boxShadow:' 8px 9px 5px -2px rgba(0,0,0,0.58)'
        }
    },

    header : {
        display:'flex'
    }


    
}));

export default styles;