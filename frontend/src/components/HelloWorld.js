import React, { useState, forwardRef } from 'react';
import { 
  Button, 
  makeStyles,
  AppBar,
  Toolbar,
  Slide,
  Typography,
  List,
  Dialog,
  IconButton
} from '@material-ui/core'

import { Close } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide directio="up" ref={ref} {...props} />
})

export default function HelloWorld() {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState("")


  const handleCloseModal = () => {
    setModal(false)
  }

  const handleOpenModal = () => {
    setModal(true)
    window.backend.basic().then(result => {
      setResult(result)
    })
  
  }

  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={() => handleOpenModal()}>
        Open to see content
      </Button>
      <Button onClick={() => handleCloseModal()}>
      </Button>
      <Dialog fullScreen open={modal} onClose={handleCloseModal} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
              <Close/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {result}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseModal}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
