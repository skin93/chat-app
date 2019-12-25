import React from 'react';
import './InfoBar.css';

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const InfoBar = ( { room } ) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={ onlineIcon } className="onlineIcon" alt="onlineImg" />
            <h3>{ room }</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={ closeIcon } alt="closeImg" /></a>
        </div>
    </div>
)

export default InfoBar;
