import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useWindowSize } from 'react-use';
import Popup from '../Popup';

const games = [
  'https://freehtml5games.org/games/smiles/index.html',
  'https://freehtml5games.org/games/jelly-match3/index.html',
  'https://freehtml5games.org/games/super-color-lines/index.html',
];

const Games = ({ open, number, gameTimeLeft, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { width, height } = useWindowSize();

  return (
    <Popup
      open={open}
      title={`Game Reward (${gameTimeLeft} seconds remaining)`}
      width="lg"
      fullScreen={fullScreen}
      actions={
        <Stack direction="row" alignItems="end">
          <Button variant="contained" onClick={onClose}>
            End Game
          </Button>
        </Stack>
      }
    >
      <iframe src={games[number]} frameBorder="0" allowFullScreen width="100%" height={height * 0.7}></iframe>
    </Popup>
  );
};

export default Games;
