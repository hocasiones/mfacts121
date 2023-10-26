import { useEffect } from 'react';
import { useTheme, Snackbar, Alert } from '@mui/material';
import userStore from 'src/store/userStore';

const Notice = () => {
  const theme = useTheme();
  const userState = userStore();

  return (
    <Snackbar
      open={userState.notice.enable}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={userState.notice.duration || 4000}
      onClose={() => userState.setNotice(userState.noticeDefault)}
    >
      <Alert severity={userState.notice.color || 'success'} variant="filled" sx={{ color: theme.palette.common.white }}>
        {userState.notice.message}
      </Alert>
    </Snackbar>
  );
};

export default Notice;
