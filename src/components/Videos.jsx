import React from 'react'
import { Box, Stack } from '@mui/system'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({videos}) => {
  console.log(videos,"videos ")
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>

     {videos.map((item,idx)=> (
         <Box key={idx}>
               {item.id.videoId && <VideoCard video={item}/>}
               { item.id.channelId && <ChannelCard channelDetail={item}/> }
         </Box>  
     ))}

     
    </Stack>
  )
}

export default Videos