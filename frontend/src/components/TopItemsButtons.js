import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function TopItemsButtons() {
  return(
    <Stack spacing={0} direction="row">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Top Tracks</Button>
        <Button>Top Artists</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default TopItemsButtons;