import React from "react";

const Form = ({inputValue, inputHandler, submitHandler}) => {
    return (
        <form onSubmit={(e)=>submitHandler(e)} className="form">
            <input type="text" value={inputValue}
                   onChange={(e)=> inputHandler(e.target.value)}
                   placeholder="Enter city"
            />
            <button>Search</button>
        </form>
    )
};

export default Form;