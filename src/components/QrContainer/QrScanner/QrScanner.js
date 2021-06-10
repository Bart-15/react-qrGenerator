import React, {useState} from 'react'
import QrScan from 'react-qr-reader'
import {Container, Button, TextareaAutosize} from '@material-ui/core'
import {IoChevronBack, RiQrScan2Line, } from 'react-icons/all'
import {Link} from 'react-router-dom'
import useStyles from './styles'
const QrScanner = () => {
    const classes = useStyles();
    const [results, setResult] = useState(['']);

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = (data) => {
        if(data) {
            setResult(data)
        }
    }


    return (
        <>
          <Container className={classes.root}>
              <div className={classes.header}>
                <Button className={classes.btn} component={Link} to="/"><IoChevronBack size={40}/></Button>
                <Button className={classes.btn}><RiQrScan2Line size={40}/>Scan Here</Button>
              </div>    
                <QrScan
                delay={3000}
                style={{height:350, width: 350}} 
                onError={handleError}
                onScan={handleScan}/>
            <TextareaAutosize style={{marginTop:'20px', fontSize:'20px'}} value={results}  rowsMin={3} aria-label="empty textarea" />
    
          </Container>
        </>
        
    )
}

export default QrScanner
