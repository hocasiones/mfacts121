import React from 'react';
import { Grid, Box, Stack, Card, CardContent, Typography } from '@mui/material';

const SubscriptionDetails = () => {
  return (
    <Box>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5">Subscription Details</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscriptionDetails;
