import './App.css';
import React from "react";
import MDEditor from "@uiw/react-md-editor";

const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)`;
function App() {
    const [value, setValue] = React.useState(mkdStr);
    return (
      <div className="container">
        <h3>Auto</h3>
        <MDEditor height={200} value={value} onChange={setValue} />
        <div data-color-mode="light">
          <h3>Light</h3>
          <MDEditor height={200} value={value} onChange={setValue} />
        </div>
        <h3>Auto MDEditor.Markdown</h3>
        <MDEditor.Markdown
          style={{ padding: 15 }}
          source={value}
          linkTarget="_blank"
          previewOptions={{
            linkTarget: "_blank"
          }}
        />
      </div>
    );
}

export default App;
