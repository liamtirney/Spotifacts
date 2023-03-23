import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

function TimeFrameButtons() {
  return(
    <Stack spacing={0} direction="row">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>4 Weeks</Button>
        <Button>6 Months</Button>
        <Button>All Time</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default TimeFrameButtons;