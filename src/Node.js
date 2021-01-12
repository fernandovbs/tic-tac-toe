import {useState, useEffect} from 'react'
import o from './o.jpeg'
import x from './x.jpeg'

export default Node =  (props) => {
    const position = props.position
    
    let check = (props.value && <img src={props.value === 'oplayer' ? o : x } alt=""/>) || '' 

    return (
        <div className={`position-${position} node`}>
            {check}
        </div>
    )
}