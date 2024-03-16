import React, { useState } from "react";
import Input from "./Components/Input";
import "./stylee.css"

const formData= [
    {
        type:"text",
        placeholder: "Enter email id",
        label: "Email",
        name: "email",
        warning: "Invalid email format"
    },
    {
        type:"password",
        placeholder: "Enter password",
        label: "Password",
        name: "password",
        warning: "Password must be atleast 8 characters"
    },
    {
        type:"password",
        placeholder: "Re-enter password",
        label: "Confirm Password",
        name: "confirmPassword",
        warning: "Password do not match"
    }
]

const App= ()=>{

    const [isValid, setIsValid]= useState({email:false,password:false,confirmPassword:false})

    function handleFormChange(e){
        let name= e.target.name;
        let value= e.target.value;
        let valid= false;

        if(name==="email"){
            const regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            valid= Boolean (regex.test(value));
        }
        if(name==="password"){
            valid= Boolean (value.length>=8);
        }
        if(name==="confirmPassword"){
            let currentPassword= e.currentTarget.password.value;
            valid = Boolean(value===currentPassword)
        }

        setIsValid({...isValid,[name]:valid})
    }

    function handleSubmit(e){
        e.preventDefault();
        let isFormValid=true;

        for(let key in isValid){
            isFormValid &&=isValid[key]
        }
        
        isFormValid? alert("Form submitted successfully ✅"):alert("Form cannot be submitted 🚫");
        return
    }
    return(
        <div className="form-container">
            <form className="form" onChange={handleFormChange} onSubmit={handleSubmit}>
                {formData.map((data,ind)=><Input  key={data.name} data={data} isValid={isValid[data.name]} />)}
                <div className="form-btn">
                    <button >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default App