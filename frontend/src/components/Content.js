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

import { contentStyle } from '../style/contentStyle.js'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Content() {
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState("")
  const contentClass = contentStyle()

  const handleOpenModal = () => {
    setModal(true)
    window.backend.basic().then(result => {
      setResult(result)
    })
  
  }

  return (
    <div className="App">
      <Button 
        variant="outlined" 
        color="primary" 
        onClick={() => handleOpenModal()}
      >
        Open to see content
      </Button>
      <Button onClick={() => setModal(false)}>
      </Button>
      <Dialog 
        fullScreen 
        open={modal} 
        onClose={() => setModal(false)} 
        TransitionComponent={Transition}>
        <AppBar className={contentClass.appBar}>
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={() => setModal(false)} 
              aria-label="close">
              <Close/>
            </IconButton>
            <Typography 
              variant="h6" 
              className={contentClass.title}>
              {result}
            </Typography>
            <Button 
              autoFocus 
              color="inherit" 
              onClick={() => setModal(false)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
