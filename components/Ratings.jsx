import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Unsatisfactory',
  1: 'Very Poor',
  1.5: 'Poor',
  2: 'Average',
  2.5: 'Good',
  3: 'Very Good',
  3.5: 'Brilliant',
  4: 'Excellent',
  4.5: 'Extraordinary',
  5: 'Outstanding',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Ratings({val,setVal}) {
  const [value, setValue] = React.useState(val?val:0);
  const [hover, setHover] = React.useState(-1);
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        ml:1,
        mt:2
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          setVal(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
