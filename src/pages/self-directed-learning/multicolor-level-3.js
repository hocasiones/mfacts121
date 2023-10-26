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
import image1 from 'public/assets/banners/SDL-Multi-Master-3-HEADER.png';
import image2 from 'public/assets/banners/Embrace-Challenge-1.png';

const MultiColorLevel3 = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Multi-Colour Master 3: Self Directed Learning">
      <Title>Multi-Colour Master 3: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Multiplication with Decimals!! (Extend)
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
            <li>Think about ways to solve multiplication equations with decimals .</li>
            <li>Remember you need to have a few different strategies to help you!</li>
            <li>
              Try the Grid Method and Written Algorithm . Perhaps there are other strategies you can think of too?
            </li>
          </ul>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px' }} />
      <Typography variant="h4">Let’s Get Started:</Typography>
      <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
        <li>Watch this video about using the Grid Method with Decimals:</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>Watch this video about using the Written Algorithm with Decimals</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>

        <li>Make and complete four equations of your own .</li>
        <li>
          Make the equations using playing cards : make &nbsp; 2 digit numbers, with 1 number after the decimal place
          (e.g. 36.2) and multiply by a 1 digit number (e.g. 4 ) that’s 36.2 x 4
        </li>
        <li>Solve each equation TWICE using both strategies (grid method and written algorithm)</li>
        <li>
          Each time you have completed two equations, check them with a calculator to make sure you are on the right
          track. If not…use your growth mindset.&nbsp;
        </li>
      </ul>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Mistakes can be helpful! Find out what you need help with and let your teacher know.
      </Typography>
      <ImageFrame src={image2} frameless />
    </MainContainer>
  );
};

export default MultiColorLevel3;
