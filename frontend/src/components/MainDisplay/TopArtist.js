import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './display.css';

function TopArtist( {item, number, id, expandedItem, setExpandedItem} ) {

  const handleChange =
    () => (event) => {
      if (expandedItem !== id){
        setExpandedItem(id);
      } else {
        setExpandedItem("");
      }
  };

  return(
    <Accordion sx={{ width: '100%'}} expanded={expandedItem === id} onChange={handleChange()}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1bh-content"
            // id="panel1bh-header"
        >
          <Typography sx={{ flex:1, color: 'text.secondary' }}>
            {number}
          </Typography>
          <Typography sx={{ flex:1 }} paddingRight="20%">
            {item['artist']}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
        </AccordionDetails>
    </Accordion>
  )
}

export default TopArtist;