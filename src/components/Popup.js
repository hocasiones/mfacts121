import React from 'react';
import {
  useTheme,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Stack } from '@mui/system';

const Popup = ({ children, open, onClose, title, actions, width, fullscreen }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={width || 'sm'}
      fullScreen={fullscreen}
      onBackdropClick={() => onClose && onClose(false)}
    >
      <DialogTitle sx={{ margin: '0 0 10px' }}>{title || 'Title'}</DialogTitle>
      <DialogContent>
        <Stack>{children || 'Content'}</Stack>
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default Popup;
