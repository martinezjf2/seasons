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

        // the only time we do assignments
        this.state = {lat: null, errorMessage: ''}
        // the value of null means we dont know the number of the latitude yet, but we will know some time in the future after we get our current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState in order to change the original state
                this.setState({lat: position.coords.latitude})
                // we did not this.state.lat = position.coords.latitude.
            },
            err => {
                this.setState({errorMessage: err.message})
            }
            );
    }

    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat} </div>
        }
        

        return <div>
           Loading...
            
            <SeasonDisplay />
        </div>
    }
}

export default App;