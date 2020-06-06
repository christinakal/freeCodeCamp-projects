import React, { useState } from "react";

import Badge from "react-bootstrap/Badge";
import marked from "marked";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
    console.log(markdown);
  };

  const inputStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };
  const outputStyle = {
    width: "400px",
    height: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>
        {/* Columns */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
            </div>
            <div className="mark-input" style={inputStyle}>
              <textarea
                className="input"
                style={inputStyle}
                value={markdown}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h4>
            </div>
            <div
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
