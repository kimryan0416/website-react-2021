import React from "react";
import { useNavigate } from "react-router-dom";

function WithRouter(Component) {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

export default WithRouter;