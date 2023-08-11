import React from 'react';
import ReactPlayer from "react-player";
import {S} from './Video_Styled'


export const Video: React.FC = () => {
    return (
        <S.VideoBox>
            <ReactPlayer
                className='react-player fixed-bottom'
                url='https://vimeo.com/853386065?share=copy'
                height='402px'
                width='186px'
                loop={true}
                playing={true}
            />
        </S.VideoBox>
    );
};


