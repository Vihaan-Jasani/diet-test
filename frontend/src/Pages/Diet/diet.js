import React, { useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Content from "../../Components/Diet/Content";
import { exportComponentAsPNG } from "react-component-export-image";
import "./Diet.css";
// import Secondcontent from "../../Components/Diet/Secondcontent";

function Diet() {
  const componentRef = useRef();

  return (
    <>
      <Navbar />
      <ul
        className="nav nav-tabs nav-justified mb-3 mt-0"
        id="ex1"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
          >
            Day 1
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
          >
            Day 2
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
          >
            Day 3
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-4"
            data-mdb-toggle="tab"
            href="#ex3-tabs-4"
            role="tab"
            aria-controls="ex3-tabs-4"
            aria-selected="false"
          >
            Day 4
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-5"
            data-mdb-toggle="tab"
            href="#ex3-tabs-5"
            role="tab"
            aria-controls="ex3-tabs-5"
            aria-selected="false"
          >
            Day 5
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-6"
            data-mdb-toggle="tab"
            href="#ex3-tabs-6"
            role="tab"
            aria-controls="ex3-tabs-6"
            aria-selected="false"
          >
            Day 6
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-7"
            data-mdb-toggle="tab"
            href="#ex3-tabs-7"
            role="tab"
            aria-controls="ex3-tabs-7"
            aria-selected="false"
          >
            Day 7
          </a>
        </li>
      </ul>

      <div className="tab-content" id="ex2-content">
        <div
          className="tab-pane fade show active"
          id="ex3-tabs-1"
          role="tabpanel"
          aria-labelledby="ex3-tab-1"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-4"
          role="tabpanel"
          aria-labelledby="ex3-tab-4"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-5"
          role="tabpanel"
          aria-labelledby="ex3-tab-5"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-6"
          role="tabpanel"
          aria-labelledby="ex3-tab-6"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-7"
          role="tabpanel"
          aria-labelledby="ex3-tab-7"
        >
          <Content ref={componentRef} />
          <div style={{ textAlign: "end", marginRight: "6.4rem" }}>
            <button
              onClick={() => exportComponentAsPNG(componentRef)}
              className="btn btn-success"
            >
              Download <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Diet;
