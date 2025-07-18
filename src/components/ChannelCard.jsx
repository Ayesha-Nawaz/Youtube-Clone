import React from 'react'
import { Box,CardContent,CardMedia,Typography,  } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetail}) => (
  <Box sx={{
    boxShadow:'none',
    borderRadius:'20px',display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    
  }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display:'flex' , flexDirection:'column', justifyContent:'center',textAlign:'center', color:'#fff'}}>
        <CardMedia 
        image={channelDetail?.snippet?.thumbnails?.high?.url|| demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{borderRadius:'50%', height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}/>

        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>

          {channelDetail?.statistics?.subscribeCount&&(
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscribeCount).toLocaleString()} Subscribe
            </Typography>
          )}
          
      </CardContent>
    </Link>

  </Box>
);

export default ChannelCard;