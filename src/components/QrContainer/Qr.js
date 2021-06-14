import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import {Container, Typography, TextField, CssBaseline, Button } from '@material-ui/core'
import {FcDownload,IoChevronBack} from 'react-icons/all'
import {Link} from 'react-router-dom'
import useStyles from './styles'
const Qr = () => {
    const classes = useStyles();

    const [info, setInfo] = useState({
        fullName:'',
        email:'',
        mobile:'',
        fullAddress: ''
    })

    //Handle the event
    function handleChange(evt) {

        const value = evt.target.value;
        setInfo({
            ...info,
            [evt.target.name] : value
        })
    }


    //Download the qr
    const downloadQr = () => {
        const canvas = document.getElementById("generatedQr");
        // console.log(canvas);

        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "yourQr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        // console.log(pngUrl)
    }


    //Component 
    const QrcodeContainer = () => {
        return (
            <>
                <QRCode id="generatedQr" value={`Name:${info.fullName}, Email:${info.email}, Mobile:${info.mobile}, Address:${info.fullAddress}`} />
                <FcDownload onClick={downloadQr} size={40} style={{marginTop:'10px', cursor:'pointer'}}/>
            </>
        )
    }

    // let name = "Bart Tabusao"
    // let lastName = "Hello"  
    return (
        <>
            <Container className={classes.root}>
            <CssBaseline />
                <div className={classes.qrContainer}>
                    <Button className={classes.btn} component={Link} to="/"><IoChevronBack size={40}/></Button>
                    <form className={classes.formRoot}>
                         <TextField type="text" name='fullName' value={info.fullName} onChange={handleChange} label="Full Name" variant="outlined" />
                         <TextField type="email" name='email' value={info.email}  onChange={handleChange} label="Email Address" variant="outlined" />
                         <TextField type="text" name='mobile' value={info.mobile} onChange={handleChange} label="Mobile Number" variant="outlined" />
                        <div className={classes.largeField}>
                         <TextField type="text" name="fullAddress" style={{width:'100%'}} value={info.fullAddress} onChange={handleChange} label="Lot No / Street / Barangay / Municipality / Province" variant="outlined" />
                        </div>
                    </form>
                    {
                        !info.fullName ?  <Typography variant="h4">No QR</Typography> : <QrcodeContainer />  
                    }
                </div>
            </Container>
        </>
    )
}

export default Qr
