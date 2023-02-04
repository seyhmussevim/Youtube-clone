import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className='searchPage'>
       <div className="searchPage__filter">
       <TuneIcon/>
       <h2>FILTER</h2>
       </div>
       <hr />
     <ChannelRow 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
        channel="seyhmussevim"
        verified
        subs="10K"
        noOfVideos={382}
        description="asdas askd kasdkaksdkaskd as"
     />
      <hr/>
     <VideoRow
        views="123K"
        subs="14K"
        description="welcome to channel"
        timestamp="1 min ago"
        channel="seyhmussevim"
        title="yourube clone"
        image="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
     />
     <VideoRow
        views="123K"
        subs="14K"
        description="welcome to channel"
        timestamp="1 min ago"
        channel="seyhmussevim"
        title="yourube clone"
        image="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
     />
     <VideoRow
        views="123K"
        subs="14K"
        description="welcome to channel"
        timestamp="1 min ago"
        channel="seyhmussevim"
        title="yourube clone"
        image="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
     />
      



    </div>
  )
}

export default SearchPage