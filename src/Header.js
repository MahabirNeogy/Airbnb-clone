import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Header() {
    const history = useHistory();

    return(
        <div className='header'>
            <Link to='/'> 
            <img
                    className="header__icon"
                    src="https://lh3.googleusercontent.com/proxy/BTdzoxGOuFQls_b0CrDjlQ9oIddkKk9mQW45SHUPArYpo6oOy4dm_nfURNC5_jyruw_nh-3GktBOH81GPbCSQdQbRcbaseZ_DmsYQf8aXc4sp2kCb2ZaXKTYMGGPjB91ekUSeULZuuLAcWjUGp175RMMJfjpwfkH"
                    alt=""
                />
            </Link>

<div className='header__center'>
                <input type="text" />
                <SearchIcon variant='outlined' onClick={() => history.push('/search')} variant='outlined' />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon variant='outlined' onClick={() => history.push('/host')} variant='outlined'/>
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header