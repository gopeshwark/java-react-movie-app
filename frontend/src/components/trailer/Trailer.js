import React from 'react';
import './Trailer.css';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Trailer = () => {
    const params = useParams();
    const key = params.ytTrailerId;
    console.log(params)
    return (
        <div className='react-player-container'>
            {!!key
                ? <ReactPlayer
                    controls="true"
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${key}`}
                    width={"100%"}
                    height={'100%'}
                />
                : null
            }
        </div>
    )
}

export default Trailer