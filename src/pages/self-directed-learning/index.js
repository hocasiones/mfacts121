import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';

//components
import MainContainer from 'src/components/MainContainer';
import Title from 'src/components/Title';
import Subtitle from 'src/components/Subtitle';
import ImageFrame from 'src/components/ImageFrame';

//images
import image1 from 'public/assets/others/Red-Level-Button-SDL-2-1.png';
import image2 from 'public/assets/others/G-Level-Button-SDL-1.png';
import image3 from 'public/assets/others/Yellow-Level-Button-SDL-1-1.png';
import image4 from 'public/assets/others/Blue-Level-Button-SDL-1-1.png';
import image5 from 'public/assets/others/1-Multi-Colour-Level-Button-SDL.png';
import image6 from 'public/assets/others/2-Multi-Colour-Level-Button-SDL.png';
import image7 from 'public/assets/others/3-Multi-Colour-Level-Button-SDL.png';
import image8 from 'public/assets/others/Division-Apprentice-SDL-Image-1.png';
import image9 from 'public/assets/others/1-Division-Master-SDL-Image.png';
import image10 from 'public/assets/others/CONSTRUCTION2-Division-Master-SDL-Image.png';

const SelfDirectedLearning = () => {
  return (
    <MainContainer title="Self-Directed Learning">
      <Title>Self-Directed Learning</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <Subtitle>Click on the levels below to complete the Self-Directed Learning tasks.</Subtitle>
      <Grid
        container
        spacing={5}
        sx={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Grid item xs={12} sm={8} md={4}>
          <Subtitle variant="h5">MULTIPLICATION</Subtitle>
          <Divider sx={{ marginBottom: '20px' }} />
          <Typography variant="h6">DOUBLES</Typography>
          <ImageFrame src={image1} href="/self-directed-learning/red-level" />
          <Typography variant="h6">ADDITION FACTS FOR ‘3 X STRATEGY’</Typography>
          <ImageFrame src={image2} href="/self-directed-learning/green-level" />
          <Typography variant="h6">DOUBLING LARGE NUMBERS (51-99)</Typography>
          <ImageFrame src={image3} href="/self-directed-learning/yellow-level" />
          <Typography variant="h6">MAKING CONNECTIONS TO LARGER EQUATIONS</Typography>
          <ImageFrame src={image4} href="/self-directed-learning/blue-level" />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Subtitle variant="h5">MULTIPLICATION EXTEND</Subtitle>
          <Divider sx={{ marginBottom: '20px' }} />
          <Typography variant="h6">DOUBLES</Typography>
          <ImageFrame src={image5} href="/self-directed-learning/multicolor-level-1" />
          <Typography variant="h6">ADDITION FACTS FOR ‘3 X STRATEGY’</Typography>
          <ImageFrame src={image6} href="/self-directed-learning/multicolor-level-2" />
          <Typography variant="h6">DOUBLING LARGE NUMBERS (51-99)</Typography>
          <ImageFrame src={image7} href="/self-directed-learning/multicolor-level-3" />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Subtitle variant="h5">DIVISION</Subtitle>
          <Divider sx={{ marginBottom: '20px' }} />
          <Typography variant="h6">FACT FAMILIES- LET’S BEGIN</Typography>
          <ImageFrame src={image8} href="/self-directed-learning/division-apprentice" />
          <Typography variant="h6">FACT FAMILIES- EXTEND</Typography>
          <ImageFrame src={image9} href="/self-directed-learning/division-master-1" />
          <Typography variant="h6">COMING SOON…</Typography>
          <ImageFrame src={image10} /*  href="/self-directed-learning/division-master-2"  */ />
        </Grid>
      </Grid>

      <Subtitle>More tasks to come… Watch this space!</Subtitle>
    </MainContainer>
  );
};

export default SelfDirectedLearning;
