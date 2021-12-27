import React, { useState } from 'react'
import './Banner.css'
import Search from './Search';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";



function Banner(){
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
             <div className='banner_search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            
            <div className='banner_info'>
                <h1>Get out stretch your imagination</h1>
                <h5>Explore the largest range of hotels</h5>
                <Button variant='outlined' onClick={() => history.push('/search')} variant='outlined'>Explore hotels</Button>
            </div>
        </div>
    )
}

export default Banner