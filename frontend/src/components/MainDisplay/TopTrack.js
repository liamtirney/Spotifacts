import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getDuration} from '../../functions';
import './display.css';

function TopTrack( {item, number, id, expandedItem, setExpandedItem} ) {

  const handleChange =
    () => (event) => {
      if (expandedItem !== id){
        setExpandedItem(id);
      } else {
        setExpandedItem("");
      }
  };

  return(
    <Accordion sx={{ width: '100%' }} expanded={expandedItem === id} onChange={handleChange()}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1bh-content"
            // id="panel1bh-header"
        >
            <Typography sx={{ flex:1, color: 'text.secondary' }}>
              {number}
            </Typography>
            <Typography sx={{ flex:1 }}>{item['track_name']} by {item['artist']}</Typography>
            <Typography sx={{ flex:1, color: 'text.secondary' }}>
            {getDuration(item['duration_ms'])}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className="track-info" /*ml="50%"*/>
            Album: {item['album_name']}
            </Typography>
            <Typography className="track-info" /*ml="50%"*/>
            Release Year: {item['album_release_year']}
            </Typography>
        </AccordionDetails>
    </Accordion>
  )
}

export default TopTrack;