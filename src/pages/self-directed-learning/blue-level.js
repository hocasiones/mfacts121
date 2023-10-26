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
import image1 from 'public/assets/banners/S-D-L-Blue-Level-Header-1024x215-1.png';
import image2 from 'public/assets/banners/FullSizeRender-1024x768-1.png';
import image3 from 'public/assets/banners/ONLINE-PRACTISE-1024x256-1.png';

const BlueLevel = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Blue Level: Self Directed Learning">
      <Title>Blue Level: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Grid container spacing={3} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What you need:</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Headphones</li>
            <li>Maths Book or Whiteboard</li>
            <li>Calculator</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What to do:</Typography>
          <ol style={{ marginLeft: '20px' }}>
            <li>Practise your doubles</li>
            <li>Watch the 2X strategy video</li>
            <li>Answer the 2X questions at the end of the video.</li>
            <li>Go to ‘Online Practise’ here and challenge yourself!</li>
          </ol>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px' }} />
      <Typography variant="h4">Let’s Get Started:</Typography>
      <ol style={{ marginLeft: '20px' }}>
        <li>Watch the Making Connections strategy video.</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>
          Answer the Making Connections strategy questions at the end of the video in your book or on a whiteboard.
        </li>
        <li>Complete the Making Connections Brainstorm activity in your book.</li>
        <ImageFrame src={image2} frameless sx={{ margin: '30px 0' }} />
        <Typography variant="body1">
          Try doing this Making Connections brainstorm in your book with one of the following facts…
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          4 x 9 =<br /> 9 x 6 =<br /> 6 x 7 =<br /> 7 x 8 =
        </Typography>
        <li>Click on the ‘Online Practise’ levels below and challenge yourself!</li>
        <ImageFrame src={image3} frameless sx={{ margin: '30px 0' }} />
        <Grid container spacing={5} sx={{ marginBottom: '40px' }}>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.blue} href="/online-practise/blue-apprentice">
              <Typography variant="h4">Blue Apprentice</Typography>
            </ColorBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.blue} href="/online-practise/blue-master">
              <Typography variant="h4">Blue Master</Typography>
            </ColorBox>
          </Grid>
        </Grid>
      </ol>
    </MainContainer>
  );
};

export default BlueLevel;
