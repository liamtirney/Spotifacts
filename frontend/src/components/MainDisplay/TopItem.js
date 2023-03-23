import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getDuration} from '../../functions';

function TopItem( {item, number} ) {
  const [expanded, setExpanded] = React.useState(false);

  // const handleChange =
  // (panel) => (event, isExpanded) => {
  //     setExpanded(isExpanded ? panel : false);
  //     panelNum++;
  // };

  const handleChange =
    () => (event) => {
      setExpanded(!expanded);
  };

  return(
    <Accordion expanded={expanded} onChange={handleChange()}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1bh-content"
            // id="panel1bh-header"
        >
            <Typography sx={{ flex:1, color: 'text.secondary' }}>
            {number}
            </Typography>
            <Typography sx={{ flex:1 }}>{item['name']} by {item['artists'][0]['name']}</Typography>
            <Typography sx={{ flex:1, width: '33%', color: 'text.secondary' }}>
            {getDuration(item['duration_ms'])}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
            </Typography>
        </AccordionDetails>
    </Accordion>
  )
}

export default TopItem;