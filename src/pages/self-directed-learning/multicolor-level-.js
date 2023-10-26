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
import image1 from 'public/assets/banners/SDL-Multi-Master-2-HEADER.png';

const MultiColorLevel2 = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Multi-Colour Master 2: Self Directed Learning">
      <Title>Multi-Colour Master 2: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Let’s use what you’ve learnt in Mfacts121 to Multiply with Larger numbers!!
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
            <li>Think about ways to solve multiplication equations with larger numbers.</li>
            <li>Remember you should work on afew different strategies to help you!</li>
            <li>
              Try the Grid Method and Written Algorithm in this task. Perhaps there are other strategies you can think
              of too?
            </li>
            <li>Follow the instructions below!</li>
          </ul>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px' }} />
      <Typography variant="h4">Let’s Get Started:</Typography>
      <Typography variant="h6">GRID METHOD!!</Typography>
      <ul style={{ marginLeft: '20px' }}>
        <li>Watch this video about using the Grid Method as a multiplication strategy</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>
          Make four equations of your own. Make the equations using playing cards. Choose which size numbers you will
          use (you could multiply 2 digit by 1 digit or 3 digit by 1 digit OR (challenge!) 4 digit by 1 digit (e.g. 45 x
          4 or 345 x 4 or 1,245 x 4)
        </li>
        <li>Complete your four equations using the grid method in your book or on your whiteboard.</li>
        <li>
          Each time you have completed two equations, check them with a calculator to make sure you are on the right
          track. If not…use your growth mindset. Mistakes can be helpful! Find out what you need help with.
        </li>
      </ul>
      <Divider sx={{ margin: '30px 0' }} />
      <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
        <li>Watch this video about using the Written Algorithm as a strategy:</li>
        <li>Complete your four equations using the written algorithm in your book or on your whiteboard.</li>
        <li>
          Each time you have completed two equations, check them with a calculator to make sure you are on the right
          track. If not…use your <i>growth mindset.</i>
        </li>
      </ul>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Mistakes can be helpful! Find out what you need help with and let your teacher know!
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Keep up the awesome work!
      </Typography>
    </MainContainer>
  );
};

export default MultiColorLevel2;
