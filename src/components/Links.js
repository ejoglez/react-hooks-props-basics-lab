import React from "react";

function Links(props){
    console.log(props)
    return(
    <div>
        <h3>Links</h3>
        <a href={props.links}>https://github.com/liza</a>
        <a href={props.links}>https://www.linkedin.com/in/liza/</a>
    </div>
    )
}

export default Links;
