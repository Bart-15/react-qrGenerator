import React from 'react'
import Qr from './components/QrContainer/Qr'
import QrScanner from './components/QrContainer/QrScanner/QrScanner'
import { Button, Container} from '@material-ui/core'
import useStyles from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
  const Home = () => {
      const classes = useStyles();
      return (
          <>
            <Container className={classes.root}>
                <div className={classes.btnContainer}>
                    <Button component={Link} to="/generate" variant="contained" className={classes.btn}>Generate Qrcode</Button>
                    <Button component={Link} to="/qr-scanner" variant="contained" className={classes.btn}>Scan Qrcode</Button>
                </div>
            </Container>
        </>
    )
}
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/generate">
                   <Qr />
                </Route>
                <Route path="/qr-scanner">
                   <QrScanner />
                </Route>
            </Switch>
        </Router>
        
    
    )
}

export default App
