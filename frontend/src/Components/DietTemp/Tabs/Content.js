import React from "react";

const Content = ({ data }) => {
  return (
    <>
      <div
        class="tab-pane fade"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        Tab 1 content
        <h2> {data} </h2>
      </div>
      <div
        class="tab-pane fade"
        id="ex1-tabs-2"
        role="tabpanel"
        aria-labelledby="ex1-tab-2"
      >
        Tab 2 content
      </div>
    </>
  );
};

export default Content;
