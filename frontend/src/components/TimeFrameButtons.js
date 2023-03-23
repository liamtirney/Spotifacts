import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

function TimeFrameButtons() {
  return(
    <Stack spacing={0} direction="row">
      <ButtonGroup aria-label="outlined primary button group">
        <Button variant="contained">4 Weeks</Button>
        <Button variant="outlined">6 Months</Button>
        <Button variant="outlined">All Time</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default TimeFrameButtons;