import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function TimeFrameButtons() {
  return(
    <Stack spacing={0} direction="row">
      <Button variant="contained">4 Weeks</Button>
      <Button variant="outlined">6 Months</Button>
      <Button variant="outlined">All Time</Button>
    </Stack>
  )
}

export default TimeFrameButtons;