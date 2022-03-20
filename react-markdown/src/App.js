import './App.css';
import React from "react";
import MDEditor from "@uiw/react-md-editor";

function App() {
    const [value, setValue] = React.useState();
    return (
      <div className="container">
        <MDEditor height={200} value={value} onChange={setValue} 
        />
      </div>
    );
}

export default App;
