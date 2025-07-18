import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMobile,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId },snippet}}) => (

    <Card sx={{width : {xs:'100%' , sm:'358px' , md:'320px',},boxShadow:'none',borderRadius:'0'}}>
          <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
               <CardMedia
               image={snippet?.thumbnails?.high?.url ||     demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { sx: "100%", sm: "358px" },    height: 180 }}
          />
          </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/$videoId` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoVideoTitle}
            <CheckCircleIcon sx={{ fontSize:'12px',color:'gray' , ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  
);

export default VideoCard;
