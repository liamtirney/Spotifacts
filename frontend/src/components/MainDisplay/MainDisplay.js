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
import Paper from '@mui/material/Paper';

// imports for grid
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import spacing from '@mui/system';

import CssBaseLine from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from '@mui/material/styles'

// import TopItem2 from './TopItem2';




function MainDisplay() {
    const NUM_ITEMS_IN_PAGE = 10;
    const [page, setPage] = React.useState(1);
    const [offset, setOffset] = React.useState(NUM_ITEMS_IN_PAGE * (page-1));

    const getItems = () => 
        // data.items.map((item, index) => 
        data.items.slice(offset, offset + NUM_ITEMS_IN_PAGE).map((item, index) => 
            <TopItem item={item} number={offset+index+1}/>
    );
  
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
            height="1000px"
            // alignItems="center" // default "stretch"
            style={{ borderStyle: "dashed", borderColor: "black" }}
        >
            <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            // height="100px"
            xs={2} 
            style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                { (page > 1) ? <PrevButton
                        page={page}
                        setPage={setPage}
                        offset={offset}
                        setOffset={setOffset}/> : null }
            </Grid>

            <Grid 
            container 
            // justifyContent="center" 
            // alignItems="center" 
            // height="900px"
            // width="100px"
            xs={6} 
            md={5}
            style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                {getItems()}
                {/* <TopItem2/> */}
            </Grid>

            <Grid 
            container 
            justifyContent="start" 
            alignItems="center" 
            xs={2} 
            style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                { (page < 5) ? <NextButton
                        page={page}
                        setPage={setPage}
                        offset={offset}
                        setOffset={setOffset}/> : null }
            </Grid>
        </Grid>
    )
}

export default MainDisplay;
