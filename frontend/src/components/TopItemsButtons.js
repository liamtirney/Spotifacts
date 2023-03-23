import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function TopItemsButtons() {
  return(
    <Stack spacing={0} direction="row">
      <ButtonGroup aria-label="outlined primary button group">
        <Button variant="contained">Top Tracks</Button>
        <Button variant="outlined">Top Artists</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default TopItemsButtons;