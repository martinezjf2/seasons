import React from "react";
import SeasonDisplay from "./SeasonDisplay";

// function App() {
//     return (
//         <div>
//             Hello World!
//             <SeasonDisplay />
//         </div>
//     )
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        // what is super?  using the Constructor redefines our own props but we still want functions from the Constuctor parent. we call super in order to call the functions that "Component" brings.

        this.state = {lat: null}
        // the value of null means we dont know the number of the latitude yet, but we will know eventually
    }

    render() {
                    window.navigator.geolocation.getCurrentPosition(
                    position => console.log(position),
                    err => console.log(err)
                );

        return <div>
            Latitude: 
            <SeasonDisplay />
        </div>
    }
}

export default App;