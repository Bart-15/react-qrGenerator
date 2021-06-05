import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import {Container, Typography, TextField, CssBaseline } from '@material-ui/core'
import useStyles from './styles'
const Qr = () => {
    const classes = useStyles();

    const [info, setInfo] = useState({
        fullName:'',
        email:'',
        mobile:'',
        fullAddress: ''
    })


    function handleChange(evt) {

        const value = evt.target.value;
        setInfo({
            ...info,
            [evt.target.name] : value
        })
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
                        !info.fullName ?  'wala' :  <QRCode value={`Name: ${info.fullName} \n Email: ${info.email} \n MobileNumber: ${info.mobile} \n FullAddress: ${info.fullAddress}` } />
                    }
                   
                </div>
            </Container>
        </>
    )
}

export default Qr
