import { Box, Button, Stack, TextField, Typography } from '@mui/material';

//components
import Logo from 'src/components/Logo';
import SignInUp from 'src/components/SignInUp';

//images

const ForgotPassword = () => {
  return (
    <SignInUp>
      <form>
        <Stack>
          <Box sx={{ padding: '0 10%', margin: '0 0 20px', '&>div': { display: 'flex', justifyContent: 'center' } }}>
            <Logo />
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Forgot Password
          </Typography>
          <TextField variant="outlined" label="Email" />
          <Button variant="contained" size="large">
            SUBMIT
          </Button>
        </Stack>
      </form>
    </SignInUp>
  );
};

export default ForgotPassword;
