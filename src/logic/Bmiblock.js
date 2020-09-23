import React from 'react';
import Blockel from './Blockel';

function Bmiblock(props){
  return(
    <div className="scrollhide">
      <ul className="secpageflex">
        {props.blockarr.map(blockarrel => {
          if (blockarrel.empty !== 1){
            return <Blockel blockarrel={blockarrel} key={blockarrel.id}/>
          }
        }  )}
      </ul>
    </div>
  )
}

export default Bmiblock;