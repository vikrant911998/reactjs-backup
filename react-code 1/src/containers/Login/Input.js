import React from 'react';

export const Input= (props)=>{
    return(
        <div>
            <h1>{props.txt}</h1>
            <input type="text" onChange={props.takeInput} placeholder="Enter the UserName"/>
            {/* <button onClick={props.increase}>click</button> */}
        </div>
    );
}

// export default Input;