import React, { useState, useEffect } from 'react';
import TopTrack from './TopTrack';
import TopArtist from './TopArtist';
import './display.css';
import {getArtists, getTracks} from '../../functions';

// side buttons
import PrevButton from './PrevButton';
import NextButton from './NextButton';

// imports for grid
import Grid from '@mui/material/Grid';


function MainDisplay( {timeFrame, itemType} ) {
    const NUM_ITEMS_IN_PAGE = 10;

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);
    const [offset, setOffset] = useState(0);
    const [expandedItem, setExpandedItem] = useState("track-1");
    

    const getItems = () => 
        data.slice(offset, offset + NUM_ITEMS_IN_PAGE).map((item, index) => 
            (itemType === 'tracks') ?
                <TopTrack item={item} number={offset+index+1}
                    key={`track-${offset+index+1}`}
                    id={`track-${offset+index+1}`}
                    expandedItem={expandedItem}
                    setExpandedItem={setExpandedItem}/> :
                <TopArtist item={item} number={offset+index+1}
                    key={`artist-${offset+index+1}`}
                    id={`artist-${offset+index+1}`}
                    expandedItem={expandedItem}
                    setExpandedItem={setExpandedItem}/>
        );

    // fetch data after components mount
    useEffect(() => {
        const items = getTracks(timeFrame);
        setData(items);
        setMaxPages(Math.ceil(items.length/NUM_ITEMS_IN_PAGE));
    }, []);

    // For every click on any of the button groups,
    // get the list of items for both top tracks and top artists
    // with current timeframe
    useEffect(() => {
        let newData, newExpandedItem;
        if (itemType === 'artists') {
            newData = getArtists(timeFrame);
            newExpandedItem = `artist-1`;

        } else if (itemType === 'tracks') {
            newData = getTracks(timeFrame);
            newExpandedItem = `track-1`;
        }

        // console.log(newData);
        setData(newData);
        setExpandedItem(newExpandedItem);
        setMaxPages(Math.ceil(newData.length/NUM_ITEMS_IN_PAGE));
        setPage(1);
        setOffset(0);
    }, [itemType, timeFrame]);

    useEffect(() => {
        const newOffset = NUM_ITEMS_IN_PAGE * (page-1);
        setOffset(newOffset);
        const newExpandedItem = (itemType === 'tracks') ? `track-${newOffset+1}` :
                            `artist-${newOffset+1}`;
        setExpandedItem(newExpandedItem);
    }, [page, itemType]);
  
    return (
        <Grid
            container
            className="main-display-area"
            // height="1000px"
            // alignItems="center" // default "stretch"
            // style={{ borderStyle: "dashed", borderColor: "black" }}
        >
            <Grid 
            container
            className="prev-arrow"
            // height="100px"
            xs={2} 
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                { (page > 1) ? <PrevButton
                    page={page}
                    setPage={setPage}/> : null }
            </Grid>

            <Grid 
            container 
            sm={6}
            md={5}
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                {getItems()}
                {/* <TopItem2/> */}
            </Grid>

            <Grid 
            container 
            className="next-arrow"
            xs={2} 
            // style={{ borderStyle: "dashed", borderColor: "black" }}
            >
                { (page < maxPages) ? <NextButton
                    page={page}
                    setPage={setPage}
                    maxPages={maxPages}/> : null }
            </Grid>
        </Grid>
    )
}

export default MainDisplay;
