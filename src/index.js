//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
// This sign => means function
//Double quotes "" for jsx value and indication, single quote for non jsx property like in styling
const App = () => {
return (
<div>
<label class="label "for="name">Enter name:</label>
<input id="name" type="text"/>
<button style={{ backgroundColor: 'blue', color: 'white'}}>Submit</button>  
</div>
 );
};

//Take the react component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
