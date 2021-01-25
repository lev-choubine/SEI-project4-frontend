
import React, {useState, useEffect} from 'react'
import DisplayOthers from './DisplayOthers'




function Others (props){
    return(
        <div>
          <h5 id="name-on-prof">{props.user.name}</h5>
          <DisplayOthers info={props.info} />
        </div>
    )
}

export default Others