import React from "react";
import { useState } from "react";
import s from "./s.module.css";

const Visit = () => {
  const [bg, setBg] = useState("background: black");
  const [logo, setLogo] = useState("bacground: white"); 

  console.log(bg, logo)

  const convertImg = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if(!!file) {
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
          resolve(fileReader.result)
        }
      }
    })
  }

  const handleChange = async (file) => {
    const readyImg = await convertImg(file.src)
    if(file.type === "bg") {
      setBg(readyImg)
    } else {
      setLogo(readyImg)
    }
  }

  return (
    <label htmlFor="file" className={s.bgImage} style={{background: `url(${bg})`}} >
      <input
        hidden
        id="file"
        type="file"
        placeholder="Выберите задний фон"
        onChange={(e) => handleChange({ type: "bg", src: e.target.files[0] })}
      />
      <label htmlFor="logo" className={s.logo} style={{background: `url(${logo})`}} >
        <input
          hidden
          id="logo"
          type="file"
          placeholder="Выберите фото"
          onChange={(e) => handleChange({ type: "logo", src: e.target.files[0] })}
        />
      </label>
      <h1 className={s.name}>Ikram Abdykalykov</h1>
      <h2 className={s.title}>CEO Of LLC "Golden Generation"</h2>
    </label>
  );
};

export default Visit;