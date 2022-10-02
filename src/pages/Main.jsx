import React from "react";
import BasicExample from "../components/Accordion/Accordion";
import Content from "../components/Content/Content";
import Visit from "../components/Visit/Visit";
import Footer from "../components/Footer/Footer";
import { getUserInfo } from "../store/visitSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(123123)
    dispatch(getUserInfo());
  }, []);
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
