import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NextButton() {
  return(
    <Stack spacing={0} direction="row">
      <ArrowForwardIosIcon/>
    </Stack>
  )
}

export default NextButton;