import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function TopItemsButtons() {
  return(
    <Stack spacing={0} direction="row">
      <Button variant="outlined">Top Tracks</Button>
      <Button variant="contained">Top Artists</Button>
    </Stack>
  )
}

export default TopItemsButtons;