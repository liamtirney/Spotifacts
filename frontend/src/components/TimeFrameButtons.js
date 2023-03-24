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
  const [active, setActive] = React.useState("1");

  const handleActiveButtonClick =
    (id) => (event) => {
      setActive(id);
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

          <Button id="1" variant={(active === "1") ? "contained" : "outlined"} onClick={handleActiveButtonClick("1")}>4 Weeks</Button>
          <Button id="2" variant={(active === "2") ? "contained" : "outlined"} onClick={handleActiveButtonClick("2")}>6 Months</Button>
          <Button id="3" variant={(active === "3") ? "contained" : "outlined"} onClick={handleActiveButtonClick("3")}>All Time</Button>
        </ButtonGroup>
      </Stack>
    </Grid>
  )
}

export default TimeFrameButtons;