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
import image1 from 'public/assets/banners/SLD-Division-Master-1-HEADER-1-1.png';
import image2 from 'public/assets/banners/Try-this-1-300x300.png';

const DivisionMasterLevel1 = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Division Master: Self Directed Learning">
      <Title>Division Master: Self Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <ImageFrame src={image1} frameless />
      <Grid container spacing={3} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What you need:</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Headphones (optional)</li>
            <li>Maths Book or Whiteboard</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">What to do:</Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>Learn about what division really means .</li>
            <li>Watch this video to help you learn.</li>
            <li>Practise with our activities.</li>
            <li>Follow the instructions below!</li>
          </ul>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px' }} />
      <Typography variant="h4">Let’s Get Started:</Typography>
      <ol style={{ marginLeft: '20px' }}>
        <li>In your maths workbook or on your whiteboard, write the heading ‘DIVISION’.</li>
        <li>
          Next, spend 5 minutes brainstorming any ideas you have about this question: How does multiplication help with
          division? You can write words, give examples and/or draw diagrams.
        </li>
        <li>Watch this video about division. The best strategy for division is ‘Think Multiplication’.</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>Draw the array 9 x 6. Remember, this means 9 rows of 6.</li>
        <li>
          There are four facts to match this array! Write the four facts in this fact family: hint: the first fact is…
        </li>
        <Box sx={{ margin: '30px 0', textAlign: 'center' }}>
          <Typography variant="h6">9×6=54</Typography>
        </Box>
        <li>Next try these fact family questions– write the questions and answers in your book/whiteboard.</li>
        <ColorBox
          bg={theme.palette.common.orange}
          btn={{ text: 'View', icon: <PictureAsPdfIcon /> }}
          fixedHeight
          sx={{ maxWidth: '300px', margin: '30px 0' }}
        ></ColorBox>
        <li>Lastly, try some Online Division Practise here:</li>
      </ol>
      <Grid
        container
        spacing={5}
        sx={{ marginBottom: '60px', marginTop: '0px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={4}>
          <ColorBox btn bg={theme.palette.common.orange} href="/online-practise/division-apprentice">
            <Typography variant="h4">Division Apprentice</Typography>
          </ColorBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColorBox btn bg={theme.palette.common.purple} href="/online-practise/division-master">
            <Typography variant="h4">Division Master</Typography>
          </ColorBox>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Remember, really knowing your multiplication facts well, helps you answer division facts too!
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{ marginBottom: '40px', marginTop: '0px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={4}>
          <ImageFrame src={image2} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default DivisionMasterLevel1;
