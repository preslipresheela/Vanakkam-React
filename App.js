import React from "react";
import ReactDOM from "react-dom/client";
/*
<div>
 <div>
   <h1 id="heading1">h1 tag</h1>
   <h2 id="heading2">h2 tag</h2>
 </div>  
</div>
*/


const heading=React.createElement("h1",{id:"heading",xyz:"xyz"},"Hello from React");
const parent=React.createElement("div",{},React.createElement("div",{},[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);