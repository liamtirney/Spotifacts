import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// imports for grid
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import spacing from '@mui/system';

function TopItemsButtons() {
  return(
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mb: '3rem'}}
      // style={{ borderStyle: "dashed", borderColor: "black" }}
  >
    <Stack spacing={0} direction="row">
      <ButtonGroup aria-label="outlined primary button group">
        <Button variant="contained">Top Tracks</Button>
        <Button variant="outlined">Top Artists</Button>
      </ButtonGroup>
    </Stack>
  </Grid>
  )
}

export default TopItemsButtons;