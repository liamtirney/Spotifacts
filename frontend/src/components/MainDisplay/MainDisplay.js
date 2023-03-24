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

import TopItem2 from './TopItem2';




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
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch" // default "stretch"
            // style={{ borderStyle: "dashed", borderColor: "black" }}
        >
            <Grid 
            container 
            justifyContent="end" 
            alignItems="center" 
            xs={2} 
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                <Grid 
                item 
                // style={{ borderStyle: "dashed", borderColor: "black", height: "29px", width: "16px"}}
                >
                    <PrevButton/>
                </Grid>
            </Grid>

            <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            xs={8} 
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                <Grid 
                item
                // style={{ borderStyle: "dashed", borderColor: "black" }}
                >
                    {getItems()}
                    {/* <TopItem2/> */}
                </Grid>
            </Grid>

            <Grid 
            container 
            justifyContent="start" 
            alignItems="center" 
            xs={2} 
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                <Grid 
                item 
                pr={2.2}
                ml={0.6}
                // style={{ borderStyle: "dashed", borderColor: "black", height: "28px", width: "16px"}}
                >
                    <NextButton/>
                </Grid>
            </Grid>
            <Grid 
            container
            height={"3rem"}
            // style={{ borderStyle: "dashed", borderColor: "black"}}
            ></Grid>
        </Grid>

        // <Container style={{ borderStyle: "dashed", borderColor: "black" }}>
        //     <Box style={{ borderStyle: "solid", height: "100px" }} display="flex" flexDirection="row" justifyContent="center">
        //         <Box p={1} m={1}>Hello</Box>
        //         <Box p={1} m={1}>Hello</Box>
        //         <Box p={1} m={1}>Hello</Box>
        //         <Box p={1} m={1}>Hello</Box>
        //     </Box>
        //     <Box>
        //         Hi there
        //     </Box>
        // </Container>

        // <div>
        //     <Grid container spacing={2}>
        //         <Grid xs={2} />
        //         <Box sx={{ flexGrow: 1 }} display="flex" border="1px solid black" justifyContent="end">
        //             <Grid xs={1} display="flex" border="1px solid black" justifyContent="center">
        //                 <PrevButton/>
        //             </Grid>
        //         </Box>
        //         <Grid xs={6}>
        //             {getItems()}
        //         </Grid>
        //         <Grid xs={1}>
        //             <NextButton/>
        //         </Grid>
        //         <Grid xs={2} />
        //     </Grid>
        // </div>
    )
}

export default MainDisplay;
