import React from 'react';
import { useTheme, Box, Grid, Typography, Divider } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Vimeo from '@u-wave/react-vimeo';

//components
import MainContainer from 'src/components/MainContainer';
import Title from 'src/components/Title';
import Subtitle from 'src/components/Subtitle';
import ImageFrame from 'src/components/ImageFrame';
import ColorBox from 'src/components/ColorBox';

//images
import image1 from 'public/assets/banners/SDL-Multi-Master-1-HEADER.png';

const MultiColorLevel1 = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Multi-Colour Master 1: Self Directed Learning">
      <Title>Multi-Colour Master 1: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Now that you are a Multi-Colour Master, let’s make sure you can use what you’ve learnt, in new situations.
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Maths is all about making connections!
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What you need:</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Headphones (optional)</li>
            <li>Maths Book or Whiteboard</li>
            <li>Calculator</li>
            <li>Playing cards (picture cards and number 10 cards removed)</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What to do:</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Watch this video, ‘Distributive Property; Separate the Question into Easier Parts.’</li>
            <li>Try the examples at the end.</li>
            <li>You can use the distributive property to help solve larger equations too!</li>
          </ul>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px' }} />
      <Typography variant="h4">Let’s Get Started:</Typography>
      <ol style={{ marginLeft: '20px' }}>
        <li>Watch this video, ‘Distributive Property; Separate the Question into Easier Parts.’</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>
          Here is a great way to do your working out when you are separating a question into easier parts. It’s called
          the grid method. Try this! Set it out in your book.
        </li>
        <Typography variant="h5" sx={{ marginTop: '40px', marginBottom: '40px' }}>
          Grid Method Worksheet 2dig x 1dig
        </Typography>
        <Grid container spacing={5} sx={{ marginBottom: '40px' }}>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.green} href="/online-practise">
              <Typography variant="h4">Online Practise</Typography>
            </ColorBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.blue} href="/online-assessment">
              <Typography variant="h4">Online Assessment</Typography>
            </ColorBox>
          </Grid>
        </Grid>
      </ol>
    </MainContainer>
  );
};

export default MultiColorLevel1;
