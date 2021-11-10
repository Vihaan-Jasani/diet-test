import React, { useRef } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Content from "../../Components/New/Content";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
// import Breakfast from "../../Components/New/Meals/Breakfast";
// import Dinner from "../../Components/New/Meals/Dinner";
// import Lunch from "../../Components/New/Meals/Lunch";
import "../New/temp.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Tempp() {
  const componentRef = useRef();

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
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
          Tab 1 content
          <Content ref={componentRef} />
          <button onClick={() => exportComponentAsJPEG(componentRef)}>
            Export As JPEG
          </button>
          <button onClick={() => exportComponentAsPDF(componentRef)}>
            Export As PDF
          </button>
          <button onClick={() => exportComponentAsPNG(componentRef)}>
            Export As PNG
          </button>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          Tab 2 content
          <div id="divToPrint" className="mt4">
            <div>Title of Component</div>
            <div>
              <Content />
            </div>
            <div className="mb5">
              <button onClick={printDocument()}>Print</button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >
          Tab 3 content
          <Content />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-4"
          role="tabpanel"
          aria-labelledby="ex3-tab-4"
        >
          <Content />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-5"
          role="tabpanel"
          aria-labelledby="ex3-tab-5"
        >
          <Content />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-6"
          role="tabpanel"
          aria-labelledby="ex3-tab-6"
        >
          <Content />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-7"
          role="tabpanel"
          aria-labelledby="ex3-tab-7"
        >
          <Content />
        </div>
      </div>
    </>
  );
}

export default Tempp;
