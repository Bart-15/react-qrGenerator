import React, {useState} from 'react'
import QrScan from 'react-qr-reader'
import {Container} from '@material-ui/core'
import useStyles from './styles'
const QrScanner = () => {
    const classes = useStyles();
    const [results, setResult] = useState([]);

    const handleError = (err) => {
        console.log(err);
    }

    //

    const handleScan = (data) => {
        if(data) {
            const finalData = data.replace(/[\r\n\s]+/gm, '')
            setResult(finalData)
        }
    }


    return (
        <>
          <Container className={classes.root}>
          <QrScan
          delay={3000}
          style={{height:350, width: 450}} 
          onError={handleError}
          onScan={handleScan}/>
          </Container>
          <div>
              {
                results
              }
          </div>
        </>
        
    )
}

export default QrScanner
