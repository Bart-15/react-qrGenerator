import React, {useState} from 'react'
import QrScan from 'react-qr-reader'
import {Container, Button, TextField} from '@material-ui/core'
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
            const finalData = data.replace(/[\r\n\s]+/gm, '');
            setResult(finalData)
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
              <TextField
              style={{marginTop:'20px', width:'100%'}}
              id="outlined-multiline-static"
              label="Result"
              multiline
              value={results}
              rows={5}
              variant="outlined"
            />
          </Container>
        </>
        
    )
}

export default QrScanner
