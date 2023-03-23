import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../../sample_data/top_tracks_short.json';
import {getDuration} from '../../functions';
import TopItem from './TopItem';

// side buttons
import PrevButton from './PrevButton';
import NextButton from './NextButton';

// imports for grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



function MainDisplay() {
    const NUM_ITEMS_IN_PAGE = 10;
    // const [expanded, setExpanded] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [offset, setOffset] = React.useState(NUM_ITEMS_IN_PAGE * (page-1));

    const getItems = () => 
        // data.items.map((item, index) => 
        data.items.slice(offset, offset + NUM_ITEMS_IN_PAGE).map((item, index) => 
            <TopItem item={item} number={offset+index+1}/>
    );
  
    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={2} />
                <Box sx={{ flexGrow: 1 }} display="flex" border="1px solid black" justifyContent="end">
                    <Grid xs={1} display="flex" border="1px solid black" justifyContent="center">
                        <PrevButton/>
                    </Grid>
                </Box>
                <Grid xs={6}>
                    {getItems()}
                </Grid>
                <Grid xs={1}>
                    <NextButton/>
                </Grid>
                <Grid xs={2} />
            </Grid>
        </div>
    )
}

export default MainDisplay;

/**
                <Box sx={{ flexGrow: 1 }} display="flex" border="1px solid black" justifyContent="end">
                    <Grid xs={1} display="flex" border="1px solid black" justifyContent="center">
                        <PrevButton/>
                    </Grid>
                </Box>
 */