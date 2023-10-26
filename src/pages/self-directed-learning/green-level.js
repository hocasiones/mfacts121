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
import image1 from 'public/assets/banners/S-D-L-Green-Level-Header-1.png';
import image2 from 'public/assets/banners/Practise-Makes-Progress-1-1024x311.png';
import image3 from 'public/assets/banners/ONLINE-PRACTISE-1024x256-1.png';

const GreenLevel = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Green Level: Self Directed Learning">
      <Title>Green Level: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Typography variant="h5" sx={{ fontStyle: 'italic', marginBottom: '40px' }}>
        “To help learn your green facts, it’s helpful to revise on your addition skills first.”
      </Typography>
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
        <li>
          Practise your addition, write your answers in your book or on a white board. Check your answers with a
          calculator!
        </li>
        <ColorBox
          bg={theme.palette.common.green}
          btn={{ text: 'View', icon: <PictureAsPdfIcon /> }}
          fixedHeight
          sx={{ maxWidth: '300px', margin: '30px 0' }}
        ></ColorBox>
        <li>
          Next watch this video, about the 3 X strategy. At the end, there are some questions for you to answer in your
          book or on a whiteboard.
        </li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>Answer the questions at the end of the video in your book or on a whiteboard.</li>
        <ImageFrame src={image2} frameless sx={{ margin: '30px 0' }} />
        <li>Click on the ‘Online Practise’ levels below and challenge yourself!</li>
        <ImageFrame src={image3} frameless sx={{ margin: '30px 0' }} />
        <Grid container spacing={5} sx={{ marginBottom: '40px' }}>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.green} href="/online-practise/green-apprentice">
              <Typography variant="h4">Green Apprentice</Typography>
            </ColorBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorBox btn bg={theme.palette.common.green} href="/online-practise/green-master">
              <Typography variant="h4">Green Master</Typography>
            </ColorBox>
          </Grid>
        </Grid>
      </ol>
    </MainContainer>
  );
};

export default GreenLevel;
