import React from "react";
import './Resume.css';
import resume from "../Kenneth Peterson Resume.pdf";

// Displays the resume page with an embedded resume

function Resume() {

  return (
    <div className="Resume">
        <embed className="resumedisplay" src={resume} zoom={100} />
    </div>
  );
}

export default Resume;
