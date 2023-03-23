import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function PrevButton() {
  return(
    <Stack spacing={0} direction="row">
      <ArrowBackIosIcon/>
    </Stack>
  )
}

export default PrevButton;