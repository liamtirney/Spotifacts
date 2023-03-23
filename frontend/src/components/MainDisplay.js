import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../sample_data/top_tracks_short.json';
import {getDuration} from '../functions';
import TopItem from '../components/TopItem';

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
            {getItems()}
        </div>
    )
}

export default MainDisplay;