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
import image1 from 'public/assets/banners/SDL-Division-App-HEADER-1.png';
import image2 from 'public/assets/banners/Effort-1.png';

const DivisionApprenticeLevel = () => {
  const theme = useTheme();

  return (
    <MainContainer title="Division Apprentice: Self Directed Learning">
      <Title>Division Apprentice: Self Directed Learning</Title>
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
          Next, spend 5 minutes brainstorming any ideas you have about this question: What does 20 ÷ 5 mean to you?
          Write ideas, words and/or draw pictures. Record any ideas you have!
        </li>
        <li>Watch this video about division:</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>Now, can you add any more ideas, words or pictures to your brainstorm about 20 ÷ 5?</li>
        <Box sx={{ margin: '30px 0' }}>
          <Vimeo video={161279311} responsive />
        </Box>
        <li>Draw the array 6 x 4. Remember, this means 6 rows of 4.</li>
        <li>
          There are four facts to match this array! Write the four facts in this fact family: hint: the first fact is
          6×4=24
        </li>
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
        sx={{ marginBottom: '40px', marginTop: '0px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={4}>
          <ColorBox btn bg={theme.palette.common.orange} href="/online-practise/division-apprentice">
            <Typography variant="h4">Division Apprentice</Typography>
          </ColorBox>
        </Grid>
      </Grid>
      <ImageFrame src={image2} />
    </MainContainer>
  );
};

export default DivisionApprenticeLevel;
