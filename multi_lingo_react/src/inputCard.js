import React from 'react';


const InputCard = (props) => {
    
    return (
    <div className='tc bg-light-blue pa1 ma1 dib br3 bw3 shadow-5'>
        <h3>{props.langName}</h3>
        <input className='ma1 pa1' type='text' size='15' name={props.langName} onChange={props.getInput}/>
    </div>)
}

export default InputCard;