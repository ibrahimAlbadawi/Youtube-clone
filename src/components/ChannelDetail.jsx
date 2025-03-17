import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import zIndex from "@mui/material/styles/zIndex";
const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDatail, setchannelDatail] = useState(null);
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setchannelDatail(data?.items[0])
        );
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setvideos(data?.items)
        );
    }, [id]);
    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        backgroundColor: "red",
                        zIndex: 10,
                        height: "300px",
                    }}
                />
                <ChannelCard channelDetail={channelDatail} marginTop="-93px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
