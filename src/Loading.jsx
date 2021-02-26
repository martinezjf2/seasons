import React from 'react';

function Loading(props) {
    return (
        
            <div className="ui active dimmer">
                <div className="ui big text loader">{props.message}</div>
            </div>
            
    )
}

        Loading.defaultProps = {
            message: "Loading..."
        };

    // defaultProps are used to have a default to a component if the parent does not pass in any props.



export default Loading;