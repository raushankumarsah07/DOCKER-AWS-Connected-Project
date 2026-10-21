import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";

function App() {
  const handleMount = (editor) => {};
  return (
    <div class="container">
      <div class="left-panel">hello white</div>

      <div class="right-panel">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

export default App;
