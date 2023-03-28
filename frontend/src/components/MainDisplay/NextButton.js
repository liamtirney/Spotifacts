import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NextButton( {page, setPage, maxPages} ) {

  const handleNextButtonClick =
    () => () => {
      if (page < maxPages){
        setPage(page+1);
      }
  };

  return(
    <Button onClick={handleNextButtonClick()}>
      <Stack className="arrow-buttons" spacing={0} direction="row">
        <ArrowForwardIosIcon/>
      </Stack>
    </Button>
  )
}

export default NextButton;