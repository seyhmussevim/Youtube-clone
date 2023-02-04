import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const [inputSearch, setInputSearch] = useState("");





  return (
    <div className='header'>
        <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img 
        className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
         alt="" />
        </Link>
        
        </div>


         <div className="header__input">
         <input 
         onChange={(e) => setInputSearch (e.target.value)} 
         value={inputSearch} 
         placeholder='Search'
          type="text" />
         
         <Link to={`/search/ ${inputSearch} `} >
         <SearchIcon className='header__inputButton' />
         </Link>
        
         </div>


         <div className="header__icons">
         <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar alt='seyhmussevim' 
        src='https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/47271118_1840840259347779_8304310530852519936_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vKVK3h9LEl4AX9N7h7p&_nc_ht=scontent.fskp2-1.fna&oh=00_AfB3LpWZhV__lHmjPUH0GPt3J6XyLXOOTRu3UlfexjRpwQ&oe=63D372CA' 
            />
         </div>
        
    </div>    
  )
}

export default Header