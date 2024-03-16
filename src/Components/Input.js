import React from "react";

const Input= ({data,isValid})=>{

    let {type,name,label,placeholder,warning}= data
    return(
        <div className="input-boxes">
            <label htmlFor={name}><strong>{label}</strong></label>
            <input id={name} name={name} placeholder={placeholder} type={type} style={isValid?{border:"2px solid green"}:{border:"2px solid red"}} />
            {isValid? "": <p className="error">{warning}</p>}
        </div>
    )
}

export default Input