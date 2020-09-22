import React, { useState } from 'react';
import Blockel from './Blockel';

function Bmiblock(props){
    return(
        <ul>
          {props.blockarr.map(blockarrel => {
              if (blockarrel.empty !== 1){
              return <Blockel blockarrel={blockarrel} key={blockarrel.id}/>
              }
           }  )}
        </ul>
    )
}

export default Bmiblock;