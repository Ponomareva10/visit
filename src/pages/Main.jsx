import React from "react";
import BasicExample from "../components/Accordion/Accordion";
import Content from "../components/Content/Content";
import Visit from "../components/Visit/Visit";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Visit/>
      <BasicExample/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Main;
