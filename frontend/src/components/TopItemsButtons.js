import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// imports for grid
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import spacing from '@mui/system';

function TopItemsButtons( {itemType, setItemType} ) {

  const handleActiveButtonClick =
    (type) => (event) => {
      if (itemType !== type)
        setItemType(type);
  };

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
          <Button 
            id="top-tracks-btn" 
            variant={(itemType === "tracks") ? "contained" : "outlined"}
            onClick={handleActiveButtonClick("tracks")}>Top Tracks</Button>
          <Button
            id="top-artists-btn"
            variant={(itemType === "artists") ? "contained" : "outlined"}
            onClick={handleActiveButtonClick("artists")}>Top Artists</Button>
      </ButtonGroup>
    </Stack>
  </Grid>
  )
}

export default TopItemsButtons;