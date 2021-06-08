import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import {Container, Typography, TextField, CssBaseline } from '@material-ui/core'
import {FcDownload} from 'react-icons/fc'
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
        console.log(pngUrl)
    }


    //Component 
    const QrcodeContainer = () => {
        return (
            <>
                <QRCode id="generatedQr" value={`[{
                    name: ${info.fullName},
                    email: ${info.email},
                    mobile: ${info.mobile},
                    address: ${info.fullAddress}
                }]` } />
                <FcDownload onClick={downloadQr} size={40} style={{marginTop:'10px'}}/>
                <Typography variant='h5'>Scan the qr code here</Typography>
            </>
        )
    }

    // let name = "Bart Tabusao"
    // let lastName = "Hello"  
    return (
        <>
            <Container>
            <CssBaseline />
                <div className={classes.qrContainer}>
                    <Typography variant="h5">Generate Qr code here</Typography>
                    <form className={classes.formRoot}>
                         <TextField type="text" name='fullName' value={info.fullName} onChange={handleChange} label="Full Name" variant="outlined" />
                         <TextField type="email" name='email' value={info.email}  onChange={handleChange} label="Email Address" variant="outlined" />
                         <TextField type="text" name='mobile' value={info.mobile} onChange={handleChange} label="Mobile Number" variant="outlined" />
                        <div className={classes.largeField}>
                         <TextField type="text" name="fullAddress" style={{width:'100%'}} value={info.fullAddress} onChange={handleChange} label="Lot No / Street / Barangay / Municipality / Province" variant="outlined" />
                        </div>
                    </form>
                    {
                        !info.fullName ?  'wala' : <QrcodeContainer />  
                    }
                </div>
            </Container>
        </>
    )
}

export default Qr
