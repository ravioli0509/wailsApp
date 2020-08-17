import React, { useState } from 'react';
import Modal from 'react-modal';
import { 
  Button, 
  makeStyles,
  appBar,
  Toolbar,
  Slide,
  Typography,
  List,
  Dialog,
} from '@material-ui/core'

import { Close } from '@material-ui/icons'



export default function HelloWorld() {
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState("")

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    }
  }));

  const handleOpenModal = () => {
    setModal(true)
    window.backend.basic().then(result => {
      setResult(result)
    })

  }

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={() => handleOpenModal()}>
        Open to see content
      </Button>
      <Modal
        isOpen={modal}
        contentLabel="Minimal Modal Example"
      >
      <p>{result}</p>
      <Button onClick={() => handleCloseModal()}>
      </Button>
      </Modal>
    </div>
  );
}
