import React from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%", marginRight: 10 }}>
        <ReactMde value={value} onChange={setValue} />
      </div>
      <div style={{ width: "50%" }}>
        Preview
        <ReactMarkdown source={value} />
      </div>
    </div>
  );
}
