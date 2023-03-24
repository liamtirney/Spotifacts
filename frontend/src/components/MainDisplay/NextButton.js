import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NextButton( {page, setPage, offset, setOffset} ) {

  const handleNextButtonClick =
    () => () => {
      if (page < 5){
        setPage(page+1);
        setOffset(offset+10);
      }
  };

  return(
    <Button variant="outlined" onClick={handleNextButtonClick()}>
      <Stack spacing={0} direction="row">
        <ArrowForwardIosIcon/>
      </Stack>
    </Button>
  )
}

export default NextButton;