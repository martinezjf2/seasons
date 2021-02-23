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
    render() {
                    window.navigator.geolocation.getCurrentPosition(
                    (position) => console.log(position),
                    (err) => console.log(err)
                );

        return <div>
            Latitude: 
            <SeasonDisplay />
        </div>
    }
}

export default App;