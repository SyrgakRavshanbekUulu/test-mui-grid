import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { ModalProps } from '@mui/material/Modal';
import styles from './Modal.module.scss'
const ModalComponent:React.FC<ModalProps> = ({open, onClose, children}) => {



  return <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className={styles.box}>
      {children}
    </Box>
</Modal>
}
export default ModalComponent;