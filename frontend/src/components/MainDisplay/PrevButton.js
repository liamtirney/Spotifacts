import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function PrevButton( {page, setPage} ) {

  const handlePrevButtonClick =
  () => () => {
    if (page > 1){
      setPage(page-1);
    }
  };

  return(
    <Button onClick={handlePrevButtonClick()}>
      <Stack className="arrow-buttons" spacing={0} direction="row">
        <ArrowBackIosIcon/>
      </Stack>
    </Button>
  )
}

export default PrevButton;