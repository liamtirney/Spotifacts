import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

// imports for grid
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import spacing from '@mui/system';

function TimeFrameButtons() {
  return(
    <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{mt: '5rem', mb: '0.5rem'}}
            // style={{ borderStyle: "dashed", borderColor: "black" }}
    >
      <Stack spacing={0} direction="row">
        <ButtonGroup aria-label="outlined primary button group">
          <Button variant="contained">4 Weeks</Button>
          <Button variant="outlined">6 Months</Button>
          <Button variant="outlined">All Time</Button>
        </ButtonGroup>
      </Stack>
    </Grid>
  )
}

export default TimeFrameButtons;