import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

// imports for grid
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import spacing from '@mui/system';

function TimeFrameButtons( {timeFrame, setTimeFrame} ) {

  const handleActiveButtonClick =
    (term) => (event) => {
      if (timeFrame !== term)
        setTimeFrame(term);
  };
  
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

          <Button
            id="short-term-btn"
            variant={(timeFrame === "short") ? "contained" : "outlined"}
            onClick={handleActiveButtonClick("short")}>4 Weeks</Button>
          <Button
            id="medium-term-btn"
            variant={(timeFrame === "medium") ? "contained" : "outlined"}
            onClick={handleActiveButtonClick("medium")}>6 Months</Button>
          <Button
            id="long-term-btn"
            variant={(timeFrame === "long") ? "contained" : "outlined"}
            onClick={handleActiveButtonClick("long")}>All Time</Button>

        </ButtonGroup>
      </Stack>
    </Grid>
  )
}

export default TimeFrameButtons;