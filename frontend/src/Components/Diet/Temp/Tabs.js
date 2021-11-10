import React, { useState } from "react";
//import TabsContent from "./TabsContent";

function Tabs({ title, id }) {
  const [Activetab, setActivetab] = useState("");

  const handleTab = () => {
    setActivetab(title);
  };

  return (
    <>
      <li className="nav-item" role="presentation">
        <a
          className={Activetab === "Day 1" ? "nav-link active" : "nav-link"}
          //   id="ex3-tab-`{key}`"
          id={id}
          data-mdb-toggle="tab"
          //href="#ex3-tabs-1"
          href={title}
          role="tab"
          //   aria-controls="ex3-tabs-1"
          aria-controls={id}
          aria-selected="true"
          onClick={handleTab}
        >
          {title}
        </a>
      </li>
    </>
  );
}

export default Tabs;
