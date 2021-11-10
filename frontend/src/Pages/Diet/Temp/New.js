import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Tabs from "../../Components/New/Tabs";
import TabsContent from "../../Components/New/TabsContent";

function New() {
  return (
    <>
      <Navbar />
      {createTabs(7)}
    </>
  );
}

export default New;

const createTabs = (count) => {
  let tabs = [];
  for (let i = 0; i < count; i++) {
    let content = `Day ${i + 1}`;
    tabs.push(content);
  }
  return (
    <>
      <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
        {tabs.map((tab, i) => (
          <>
            {console.log(tab, i)}
            <Tabs title={tab} id={i + 1}></Tabs>
          </>
        ))}
      </ul>
      <div className="tab-content" id="ex1-content">
        {tabs.map((tab, i) => (
          <>
            <TabsContent title={tab} id={i + 1} />
          </>
        ))}
      </div>
    </>
  );
};
