import React from "react";

function Tab() {
  return (
    <>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="ex1-tab-1"
          data-mdb-toggle="tab"
          href="#ex1-tabs-1"
          role="tab"
          aria-controls="ex1-tabs-1"
          aria-selected="false"
        >
          Day 1
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="ex1-tab-2"
          data-mdb-toggle="tab"
          href="#ex1-tabs-2"
          role="tab"
          aria-controls="ex1-tabs-2"
          aria-selected="false"
        >
          Day 2
        </a>
      </li>
    </>
  );
}

export default Tab;
